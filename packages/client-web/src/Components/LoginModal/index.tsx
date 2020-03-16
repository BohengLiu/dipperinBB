import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import { Modal, Button, message } from 'antd'
import { throttle } from 'Utils/functions'

import styles from './index.module.scss'

interface Props {
  onCancel: () => void
  onConfirm: (username: string, description: string) => Promise<void>
  visiable: boolean
}

@observer
class LoginModal extends React.Component<Props> {
  @observable username = ''
  @observable description = ''

  @action handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 24) {
      if (/^[\u4e00-\u9fa5a-zA-Z0-9]*$/.test(e.target.value)) {
        this.username = e.target.value
      }
    }
  }

  @action handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 200) {
      this.description = e.target.value
    } else {
      this.toast('自我介绍超出长度限制！')
    }
  }

  toast = throttle((msg: string) => {
    message.warn(msg)
  }, 3000)

  validateUsername = async (): Promise<boolean> => {
    if (this.username === '') {
      this.toast('请输入您的用户名！')
      return false
    }
    if (this.username.length < 4) {
      this.toast('用户名需要大于4个字符！')
      return false
    }
    return true
  }

  handleConfirm = async () => {
    if (await this.validateUsername()) {
      await this.props.onConfirm(this.username, this.description)
    }
  }

  registerTitle = () => (
    <div className={styles.registerTitle}>
      <span className={styles.title}>金融界 模拟也能赚钱</span>
    </div>
  )

  renderRegisterBody = () => (
    <div className={styles.body}>
      <p className={styles.label}>编辑账户信息</p>
      <input
        className={styles.username}
        placeholder="请设置用户名（必填）"
        value={this.username}
        onChange={this.handleChangeUsername}
      />
      <textarea
        className={styles.description}
        placeholder="一句话介绍自己（选填）"
        value={this.description}
        onChange={this.handleChangeDescription}
      />
      <Button className={styles.btnConfirm} onClick={this.handleConfirm}>
        确认
        {/* <Icon type="loading" style={{ fontSize: 16 }} /> */}
      </Button>
    </div>
  )

  render() {
    const { visiable } = this.props
    return (
      <Modal
        title={null}
        footer={null}
        visible={visiable}
        // onCancel={onCancel}
        closable={false}
        className={styles.registerModal}
        style={{ width: '420px', marginTop: '100px' }}
      >
        {this.registerTitle()}

        {this.renderRegisterBody()}
      </Modal>
    )
  }
}

export default LoginModal