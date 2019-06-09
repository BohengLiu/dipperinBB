import React from "react";
import Essay from "@models/essay";

interface Props {
  essay: Essay;
  onTurn: ()=> void
}

class EssayItem extends React.Component<Props> {
  render() {
    const essay = this.props.essay;
    return (
      <div className="essay-item">
        <div className="left">
          <div className="avatar">{essay.author[0]}</div>
          <div className="info">
            <div className="essay-title" onClick={this.props.onTurn}>{essay.essayTitle}</div>
            <div className="create-time">
              {essay.createTime} • {essay.author}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="data">
            <div className="amount">{essay.earn}</div>
            <div className="type">B</div>
          </div>
          <div className="data">
            <div className="amount">{essay.like}</div>
            <div className="type">点赞</div>
          </div>
          <div className="data">
            <div className="amount">{essay.reply}</div>
            <div className="type">回帖</div>
          </div>
          <div className="data">
            <div className="amount">{essay.visit}</div>
            <div className="type">浏览</div>
          </div>
        </div>
        <div className="more">
          <svg width="30" height="20">
            <rect x="0" y="8" height="5" width="5" style={{ fill: "#ddd" }} />
            <rect x="6" y="8" height="5" width="5" style={{ fill: "#ddd" }} />
            <rect x="12" y="8" height="5" width="5" style={{ fill: "#ddd" }} />
          </svg>
          {/* <div className="choices">
            <div className="choice">关注</div>
            <div className="choice">收藏</div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default EssayItem;
