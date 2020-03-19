import React from 'react'
// import {observable} from 'mobx'
import { Link } from 'react-router-dom'

import Header from 'Container/Header'
import { observer, inject } from 'mobx-react'
import AccountStore from 'Store/account'
import LayoutStore from 'Store/layout'

interface Props {
  account: AccountStore
  layout: LayoutStore
}

@inject('layout', 'account')
@observer
class Article extends React.Component<Props> {
  authorInfo = {
    username: 'yeyan1996',
    avatar: ''
  }
  article = {
    time: 1560000347952,
    viewCounts: 10,
    title: '大型项目前端架构浅谈（8000字原创）'
  }
  render() {
    return (
      <div className="article">
        <Header account={this.props.account} layout={this.props.layout}/>
        <main className="article-area">
          <article>
            <div className="author-info-block">
              <Link to="/">
                <div className="avatar" />
              </Link>
              <div className="author-info-block">
                <div className="username">{this.authorInfo.username}</div>
                <div className="meta-data">
                  <time>{this.article.time}</time>
                  <span className="view-counts">{this.article.viewCounts}</span>
                </div>
                <div className="actions">
                  <button className="follow">关注</button>
                </div>
              </div>
            </div>
            <h1>{this.article.title}</h1>
            <div className="article-content" />
          </article>
        </main>
      </div>
    )
  }
}

export default Article
