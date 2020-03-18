import React from 'react'
import { observer, inject } from 'mobx-react'

import Curtain from 'Component/curtain'
import Header from 'Component/header'
import EssayList from 'Component/essayList'
import NotePad from 'Component/notePad'

import LayoutStore from 'Store/layout'

import './index.less'

interface Props {
  layout?: LayoutStore
}

@inject('layout')
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
          <Header />
          <EssayList title={'热门'} />
        </Curtain>
        {ifShowNotePad && <NotePad onClose={this.handleNotePadDisplay(false)} />}
      </div>
    )
  }
}

export default Home
