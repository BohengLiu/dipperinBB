import React from 'react'
import { Input, Form, Button, Checkbox } from 'antd'
import {config} from './config'
import styles from './index.module.scss'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
}

interface Props {
  onLogin: (email: string, psw: string) => Promise<void>
}

// interface OnFinishValue {
//   email: string,
//   password: string
// }

class LoginSection extends React.Component<Props> {
  // TODO: 切换tab需要清空内容
  onFinish = (values: any) => {
    console.log('Success:', values)
    this.props.onLogin(values.email, values.password)
  }

  onFinishFailed = (errorInfo:any)  => {
    console.log('Failed:', errorInfo)
  }
  render() {
    return (
      <div className={styles.login}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          

          <Form.Item
            label={config.emailLabel}
            name="email"
            rules={[{ required: true, message: config.emailEmptyError }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={config.passwordLabel}
            name="password"
            rules={[{ required: true, message: config.passwordEmptyError }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item className={styles.btnBox}>
            <Button type="primary" htmlType="submit">
              {config.loginTabName}
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default LoginSection
