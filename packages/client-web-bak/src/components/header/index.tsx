import React from "react";
// import {observable} from 'mobx'
import {observer,inject} from 'mobx-react'
import RootStore from '@stores/root'

import "./index.less";

interface Props {
  root?: RootStore
}

@inject('root')
@observer
class Header extends React.Component<Props> {
  handleOpenNotePad =()=> {
    // FIXME: 不要直接在外部修改 store 内的变量
    this.props.root!.pop.notePad = true
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
