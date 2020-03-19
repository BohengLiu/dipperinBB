import { loginAccount, createAccount } from 'Service/API/v1'
import { observable, action } from 'mobx'
import { ResultIF, DefaultResult } from 'Utils/common.interface'

export interface AccountIF {
  id?: number
  username: string
  email: string
  bio: string
  token?: string
  image: string
}

class AccountStore {
  @observable
  account?: AccountIF

  @action setAccount = (newAccount: AccountIF | undefined) => {
    this.account = newAccount
    this.saveAccount()
  }

  load = () => {
    this.loadAccount()
  }

  private loadAccount = () => {
    try {
      const newAccountString = window.localStorage.getItem('account')
      if (newAccountString) {
        const newAccountJSON = JSON.parse(newAccountString)
        if (typeof newAccountJSON !== 'object' || !('token' in newAccountJSON)) {
          return
        }
        const newAccount = {}
        ;['id', 'username', 'email', 'bio', 'token', 'image'].forEach(element => {
          if (element in newAccountJSON) {
            newAccount[element] = newAccountJSON[element]
          }
        })
        this.setAccount(newAccount as AccountIF)
      }
    } catch {}
  }

  private saveAccount = () => {
    if (this.account) {
      window.localStorage.setItem('account', JSON.stringify(this.account))
    }
  }

  register = async (email: string, username: string, password: string):Promise<ResultIF<null, string>> => {
    // FIXME:
    console.log('register', email, username, password)
    const res = await createAccount(email, username, password)
    if (res.success) {
      this.setAccount(res.data)
      return DefaultResult.success
    } else {
      // TODO: 分不同的从错误
      return {
        success: false,
        error: '注册失败！',
      }
    }
  }

  login = async (email: string, password: string): Promise<ResultIF<null, string>> => {
    // FIXME:
    console.log('login', email, password)
    const res = await loginAccount(email, password)
    if (res.success) {
      this.setAccount(res.data)
      return DefaultResult.success
    } else {
      return {
        success: false,
        error: '账号或密码错误！',
      }
    }
  }

  logout = () => {
    this.setAccount(undefined)
    window.localStorage.removeItem('account')
  }
}

export default AccountStore
