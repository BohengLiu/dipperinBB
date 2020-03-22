import { getRequest, postRequest } from 'Service/http'
import {ArticleData} from '@wisdom-node/server-nestjs/src/article/article.interface'

interface SuccessResultIF<T> {
  success: true
  data: T
}

interface ErrorResultIF<E> {
  success: false
  error: E
}
// interface DEFAULT_ERROR_IF {
//   data: { errors: any }
//   status: number
//   statusText: number
// }

type ResultIF<T = null, E = null> = SuccessResultIF<T> | ErrorResultIF<E>

export enum API_ERROR {
  ERROR_ACCOUNT_OR_PASSWORD, // 账户或密码错误
  ERROR_PASSWORD, // 密码错误
  USERNAME_HAS_EXIST, // 用户名已存在
  EMAIL_HAS_REGISTER, // 该邮箱已被注册
}

interface UserInfoIF {
  id?: number
  email: string
  token?: string
  username: string
  bio: string
  image: string
}

interface UserInfoREIF {
  user: UserInfoIF
}

// -----------------------------------------------------------------------------
// Account api
// -----------------------------------------------------------------------------

export const getAccountInfo = async (authorization: string) => {
  const res = await getRequest('/user', authorization)
  return res
}

export const createAccount = async (
  email: string,
  username: string,
  password: string
): Promise<ResultIF<UserInfoIF>> => {
  try {
    const user = {
      email,
      username,
      password,
    }
    const res = ((await postRequest('/users', '', { user })) as any) as UserInfoREIF
    console.log(res)
    return {
      success: true,
      data: res.user,
    }
  } catch (e) {
    return {
      success: false,
      error: null,
    }
  }
}

export const loginAccount = async (email: string, password: string): Promise<ResultIF<UserInfoIF>> => {
  try {
    const user = {
      email,
      password,
    }
    const res = ((await postRequest('users/login', '', { user })) as any) as UserInfoREIF
    console.log(res)
    return {
      success: true,
      data: res.user,
    }
  } catch (e) {
    return {
      success: false,
      error: null,
    }
  }
}

// -----------------------------------------------------------------------------
// Content api
// -----------------------------------------------------------------------------
interface ArticleREIF {
  article: ArticleData
}

export const getArticle = async (slug: string):Promise<ResultIF<ArticleData,null>> => {
  try {
    const res = await getRequest('articles/'+slug) as any as ArticleREIF
    return {
      success: true,
      data: res.article,
    }
  } catch (e) {
    return {
      success: false,
      error: null,
    }
  }
}