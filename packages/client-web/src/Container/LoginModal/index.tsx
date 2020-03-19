import React from 'react'
import {Modal} from 'antd'
import {Tabs} from 'antd'
// import { Modal, Button, message } from 'antd'
// import { throttle } from 'Utils/functions'
import LoginSection from './LoginSection'
import RegisterSection from './RegisterSection'
import {config} from './config'
import AccountStore from 'Store/account'

import styles from './index.module.scss'
import { observer } from 'mobx-react'

interface Props {
  onCancel: () => void
  visiable: boolean
  onConfirm: (username: string, description: string) => Promise<void>
  account: AccountStore
}


@observer
class LoginModal extends React.Component<Props> {
  handleLogin = async (email: string, password: string) => {
    const res = await this.props.account.login(email,password)
    console.log('registerRes', res)
    return 
  }

  handleRegister = async (email: string, username: string, password: string) => {
    const res = await this.props.account.register(email,username, password)
    console.log('loginRes',res)
    return 
  }


  render() {
    const { visiable, onCancel } = this.props
    return (
      <Modal
        title={null}
        footer={null}
        visible={visiable}
        onCancel={onCancel}
        closable={true}
        className={styles.registerModal}
        style={{ width: '420px', marginTop: '100px' }}
      >
        <Tabs className={styles.tab} tabPosition="top">
          <Tabs.TabPane tab={<span className={styles.tabsTab}>{config.loginTabName}</span>} key="1">
          <LoginSection onLogin={this.handleLogin} />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span className={styles.tabsTab}>{config.registerTabName}</span>} key="2">
          <RegisterSection onRegister={this.handleRegister}/>
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    )
  }
}

export default LoginModal