import React from "react";
import { observer, inject } from "mobx-react";

import RootStore from "@stores/root";

import EssayItem from "./essayItem";
import "./index.less";

interface Props {
  title: string;
  root?: RootStore;
}

@inject("root")
@observer
class EssayList extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.props.root!.contents.addMockEssay();
  }

  render() {
    const { title } = this.props;
    const { essayList } = this.props.root!.contents;
    return (
  
        <div className="essay-list">
          <div className="title">{title}</div>
          {essayList.map((item,index) => {
            return <EssayItem essay={item} key={index}/>;
          })}
        </div>
 
    );
  }
}

export default EssayList;
