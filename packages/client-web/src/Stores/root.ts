import ContentStore from './contents'
import LayoutStore from './layout'

class RootStore {
  contents: ContentStore
  layout: LayoutStore

  constructor() {
    this.contents = new ContentStore()
    this.layout = new LayoutStore()
  }
}

export default RootStore;
