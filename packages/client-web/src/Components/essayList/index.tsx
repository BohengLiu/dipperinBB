import React from "react";
import { observer, inject } from "mobx-react";
import { RouteComponentProps,withRouter } from 'react-router-dom'

import ContentStore from "Stores/contents";

import EssayItem from "./essayItem";
import "./index.less";

interface Props extends RouteComponentProps<{}> {
  title: string;
  contents?: ContentStore;
}

@inject("contents")
@observer
class EssayList extends React.Component<Props> {
  constructor(props:Props) {
    super(props);
    // FIXME: for debug
    this.props.contents!.addMockEssay();
  }

  onTurn = () => {
    this.props.history.push('/article/1')
  }

  render() {
    const { title } = this.props;
    const { essayList } = this.props.contents!;
    return (
  
        <div className="essay-list">
          <div className="title">{title}</div>
          {essayList.map((item,index) => {
            return <EssayItem onTurn={this.onTurn} essay={item} key={index}/>;
          })}
        </div>
 
    );
  }
}

export default withRouter(EssayList);
