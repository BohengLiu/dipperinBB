import React from "react";
// import {observable} from 'mobx'
import {observer,inject} from 'mobx-react'
import RootStore from 'Stores/root'

import "./index.less";

interface Props {
  root?: RootStore
}

@inject('root')
@observer
class Header extends React.Component<Props> {
  handleOpenNotePad =()=> {
    this.props.root!.layout.setIfShowNotePad(true)
    console.log('open notePad!')
  }
  render() {
    return (
      <div className="header">
        <div>Dipperin社区论坛</div>
        <div>热门</div>
        <div>最新</div>
        <div>关注</div>
        <div>问答</div>
        <div onClick={this.handleOpenNotePad}>写文章</div>
        <div>搜索</div>
        <div>私信</div>
        <div>用户信息</div>
      </div>
    );
  }
}

export default Header;
