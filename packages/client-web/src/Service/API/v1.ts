import {getRequest, postRequest} from 'Service/http'

// -------------------------------------------------------------
// Account api
// --------------------------------------------------------------

export const getAccountInfo = async (authorization: string) => {
  const res = await getRequest('/user', authorization)
  return res
}

export const createAccount = async (email: string, username: string, password: string) => {
  const data = {
    email,
    username,
    password,
  }
  const res = await postRequest('/users','',data)
  return res
}

export const loginAccount = async (email: string, password: string) => {
  const data = {
    email, 
    password
  }
  const res = await postRequest('users/login','',data)
  return res
}