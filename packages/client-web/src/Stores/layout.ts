import { observable, action } from 'mobx'

class LayoutStore {
  @observable ifShowNotePad: boolean = false
  @action setIfShowNotePad = (flag: boolean) => {
    this.ifShowNotePad = flag
  }

  @observable ifShowLoginModal: boolean = false
  @action setIfShowLoginModal = (flag: boolean) => {
    this.ifShowLoginModal = flag
  }
}

export default LayoutStore
