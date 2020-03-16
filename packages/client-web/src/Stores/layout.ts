import { observable, action } from 'mobx'

class LayoutStore {
  @observable ifShowNotePad: boolean = false
  @action setIfShowNotePad = (flag: boolean) => {
    this.ifShowNotePad = flag
  }
}

export default LayoutStore
