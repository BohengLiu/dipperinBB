import {observable} from 'mobx'

class PopStore {
  @observable
  notePad: boolean = false
}

export default PopStore