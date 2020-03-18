import React from 'react'
import {Modal} from 'antd'
import {Tabs} from 'antd'
// import { Modal, Button, message } from 'antd'
// import { throttle } from 'Utils/functions'
import LoginSection from './LoginSection'
import RegisterSection from './RegisterSection'
import {config} from './config'

import styles from './index.module.scss'
import { observer } from 'mobx-react'

interface Props {
  onCancel: () => void
  visiable: boolean
  onConfirm: (username: string, description: string) => Promise<void>
  onLogin: (email:string, password: string) => Promise<void>
  onRegister: (username: string, password: string, email: string) => Promise<void>
}


@observer
class LoginModal extends React.Component<Props> {
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
          <LoginSection onLogin={this.props.onLogin} />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span className={styles.tabsTab}>{config.registerTabName}</span>} key="2">
          <RegisterSection onRegister={this.props.onRegister}/>
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    )
  }
}

export default LoginModal