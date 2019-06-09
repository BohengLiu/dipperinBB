import React from "react";
import { observer, inject } from "mobx-react";

import Curtain from "@components/curtain";
import Header from "@components/header";
import EssayList from "@components/essayList";
import NotePad from "@components/notePad";

import RootStore from "@stores/root";

import "./index.less";

interface Props {
  root?: RootStore;
}

@inject("root")
@observer
class Home extends React.Component<Props> {
  handleNotePadDisplay = (flag: boolean) => () => {
    // FIXME: do not change state in component
    this.props.root!.pop.notePad = flag;
  };
  render() {
    const { notePad } = this.props.root!.pop;
    return (
      <div className="home">
        <Curtain>
          <Header />
          <EssayList title={"热门"} />
        </Curtain>
        {notePad && <NotePad onClose={this.handleNotePadDisplay(false)} />}
      </div>
    );
  }
}

export default Home;
