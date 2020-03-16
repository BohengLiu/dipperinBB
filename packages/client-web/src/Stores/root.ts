import ContentStore from './contents'
import PopStore from './pop'

class RootStore {
  contents: ContentStore
  pop: PopStore

  constructor() {
    this.contents = new ContentStore()
    this.pop = new PopStore()
  }
}

export default RootStore;
