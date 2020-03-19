import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Menu, Dropdown } from 'antd'
import styles from './avatar.module.scss'

interface AvatarMenuItems {
  items: (React.ReactNode | React.ReactNode[])[]
}

const renderMenuItem = (item: React.ReactNode | React.ReactNode[], index: number) => {
  if (item instanceof Array) {
    return item.map((el, id) => <Menu.Item key={`${index}+${id}`}>{el}</Menu.Item>)
  } else {
    return <Menu.Item key={String(index)}>{item}</Menu.Item>
  }
}

const AvatarMenu: React.FC<AvatarMenuItems> = ({ items }) => (
  <Menu className={styles.menu}>
    {items.map((item, index) => {
        return renderMenuItem(item, index)
    })}
  </Menu>
)

const AvatarUI: React.FC<AvatarMenuItems> = ({ items }) => {
  return (
    <Dropdown
      overlay={<AvatarMenu items={items} />}
      trigger={['click']}
      placement="bottomCenter"
      overlayClassName={styles.avatarDropdown}
    >
      <Avatar icon={<UserOutlined />} />
    </Dropdown>
  )
}

export default AvatarUI
