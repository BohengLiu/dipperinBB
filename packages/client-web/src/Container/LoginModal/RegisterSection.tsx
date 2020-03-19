import React from 'react'
import { Input, Form, Button } from 'antd'
import {config} from './config'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 10, span: 16 },
}

interface Props {
  onRegister: (email: string, username: string,password: string)=> Promise<void>
}

class RegisterSection extends React.Component<Props> {
  // TODO: 切换tab需要清空内容
  onFinish = (values:any) => {
    console.log('Success:', values)
    this.props.onRegister(values.email,values.username,values.password)
  }

  onFinishFailed = (errorInfo:any)  => {
    console.log('Failed:', errorInfo)
  }
  render() {
    return (
      <div>
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
            label={config.usernameLabel}
            name="username"
            rules={[{ required: true, message: config.usernameEmptyError }]}
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

          <Form.Item
            label={config.repeatPasswordLabel}
            name="repeatPassword"
            rules={[{ required: true, message: config.repeatPasswordEmptyError }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              {config.registerTabName}
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default RegisterSection
