import React from 'react'
// import {observable} from 'mobx'
import { observer } from 'mobx-react'
import LayoutStore from 'Store/layout'
import AccountStore from 'Store/account'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

import styles from './index.module.scss'

interface Props {
  layout: LayoutStore
  account: AccountStore
}

@observer
class Header extends React.Component<Props> {
  handleOpenNotePad = () => {
    this.props.layout.setIfShowNotePad(true)
  }
  handleOpenLoginModal = () => {
    this.props.layout.setIfShowLoginModal(true)
  }
  handleLogout = () => {
    this.props.account.logout()
  }
  // TODO: 将UI部分抽象成一个UI组件
  render() {
    const { account } = this.props.account
    const items = [<Link to="/profile">个人主页</Link>, <Link to="/setting">设置</Link>, <span onClick={this.handleLogout}>退出</span>]
    return (
      <div className={styles.topbar}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Link to="/">主页</Link>
          </div>
          <div className={styles.right}>
            <span style={{marginRight:50,display:'flex',alignItems:'center'}} onClick={this.handleOpenNotePad}>写文章</span>
            <div>
              {account && <Avatar items={items} />}
              {!account && <span onClick={this.handleOpenLoginModal}>登录/注册</span>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
