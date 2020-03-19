import ContentStore from './content'
import LayoutStore from './layout'
import AccountStore from './account'

class RootStore {
  content: ContentStore
  layout: LayoutStore
  account: AccountStore

  constructor() {
    this.content = new ContentStore()
    this.layout = new LayoutStore()
    this.account = new AccountStore()
  }

  load = () => {
    this.account.load()
  }
}

export default RootStore;
