import ContentStore from './contents'
import LayoutStore from './layout'
import AccountStore from './account'

class RootStore {
  contents: ContentStore
  layout: LayoutStore
  account: AccountStore

  constructor() {
    this.contents = new ContentStore()
    this.layout = new LayoutStore()
    this.account = new AccountStore()
  }
}

export default RootStore;
