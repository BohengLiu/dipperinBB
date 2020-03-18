class Account {
  register =async (email: string, username: string, password: string) => {
    console.log('register', email, username, password)
    return Promise.resolve()
  }

  login =async (email: string, password: string) => {
    console.log('login', email, password)
    return Promise.resolve()
  }
}

export default Account