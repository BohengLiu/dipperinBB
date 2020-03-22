import React from "react";
import { observer, inject } from "mobx-react";
import { RouteComponentProps,withRouter } from 'react-router-dom'

import ContentStore from "Store/content";

import ContentItem from "./ContentItem";
import "./index.less";

interface Props extends RouteComponentProps<{}> {
  title: string;
  content?: ContentStore;
}

@inject("content")
@observer
class EssayList extends React.Component<Props> {
  constructor(props:Props) {
    super(props);
    // FIXME: for debug
    this.props.content!.addMockEssay();
  }

  onTurn = () => {
    this.props.history.push('/article/1')
  }

  handleLikeArticle = (slug:string) => {
    console.log('like',  slug)
  }

  render() {
    const mockData = {
      slug: 'aldfla',
      url: '/articles/aldfla',
      title: 'halouhalouhalou',
      uts: Date.now(), // update timestamp
      authorName: 'user1',
      likeCount: 1,
      commentCount: 2,
    }
    const { title } = this.props;
    const { essayList } = this.props.content!;
    return (
  
        <div className="essay-list">
          <div className="title">{title}</div>
          {essayList.map((item,index) => {
            return <ContentItem {...mockData} onLike={this.handleLikeArticle} key={index}/>;
          })}
        </div>
 
    );
  }
}

export default withRouter(EssayList);
