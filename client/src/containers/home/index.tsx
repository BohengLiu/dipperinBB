import React from "react";
import { observer,inject } from "mobx-react";

import Curtain from "@components/curtain";
import Header from "@components/header";
import EssayList from "@components/essayList";
import RootStore from '@stores/root'

import "./index.less";

interface Props {
  root?: RootStore
}

@inject('root')
@observer
class Home extends React.Component<Props> {
  render() {
    const {notePad} = this.props.root!.pop
    return (
      <div className="home">
        <Curtain>
          <Header />
          <EssayList title={"热门"} />
        </Curtain>
        {/* {notePad && <} */}
      </div>
    );
  }
}

export default Home;
