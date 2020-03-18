import React from 'react'
import { observer, inject } from 'mobx-react'

import Curtain from 'Components/curtain'
import Header from 'Components/header'
import EssayList from 'Components/essayList'
import NotePad from 'Components/notePad'

import LayoutStore from 'Stores/layout'

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
