import React from "react";
import "./index.less";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>Dipperin社区论坛</div>
        <div>热门</div>
        <div>最新</div>
        <div>关注</div>
        <div>问答</div>
        <div>写文章</div>
        <div>搜索</div>
        <div>私信</div>
        <div>用户信息</div>
      </div>
    );
  }
}

export default Header;
