import React from 'react'
import { observer, inject } from 'mobx-react'

import Curtain from 'Component/curtain'
import Header from 'Container/Header'
import EssayList from 'Component/essayList'
import NotePad from 'Component/notePad'

import LayoutStore from 'Store/layout'

import './index.less'
import AccountStore from 'Store/account'

interface Props {
  layout: LayoutStore
  account: AccountStore
}

@inject('layout', 'account')
@observer
class Home extends React.Component<Props> {
  handleNotePadDisplay = (flag: boolean) => () => {
    this.props.layout!.setIfShowNotePad(flag)
  }
  render() {
    const { ifShowNotePad } = this.props.layout!
    return (
      <div className="home">
        <Curtain>
          <Header layout={this.props.layout} account={this.props.account} />
          <EssayList title={'热门'} />
        </Curtain>
        {ifShowNotePad && <NotePad onClose={this.handleNotePadDisplay(false)} />}
      </div>
    )
  }
}

export default Home
