import React from 'react'
import { observer, inject } from 'mobx-react'

import Curtain from 'Components/curtain'
import Header from 'Components/header'
import EssayList from 'Components/essayList'
import NotePad from 'Components/notePad'

import RootStore from 'Stores/root'

import './index.less'

interface Props {
  root?: RootStore
}

@inject('root')
@observer
class Home extends React.Component<Props> {
  handleNotePadDisplay = (flag: boolean) => () => {
    // FIXME: do not change state in component
    this.props.root!.pop.notePad = flag
  }
  render() {
    const { notePad } = this.props.root!.pop
    return (
      <div className="home">
        <Curtain>
          <Header />
          <EssayList title={'热门'} />
        </Curtain>
        {notePad && <NotePad onClose={this.handleNotePadDisplay(false)} />}
      </div>
    )
  }
}

export default Home
