import React from 'react'
import styles from './styles.module.scss'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import Logo from 'Images/logo.png'

interface Props {
  path?: string
  hiddenLinks?: boolean
  background?: string
}

const TopBar: React.FC<Props> = ({ path = '/home', hiddenLinks, background, children }) => {
  console.log(background)
  const style = background ? { backgroundImage: `url(${background})`,backgroundSize: 'cover', height: 316 } : {}
  console.log(style)
  return (
    <div className={styles.topbar} style={style}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img alt="" src={Logo} />
        </div>
        {!hiddenLinks && (
          <div className={styles.right}>
            <Link className={path === '/home' ? styles.active : ''} to="/home">
              首页
            </Link>
            <Link className={path === '/realtimedata' ? styles.active : ''} to="/realtimedata">
              实时数据
            </Link>
            <Link className={path === '/checktool' ? styles.active : ''} to="/checktool">
              在线查验
            </Link>
          </div>
        )}
      </div>
      {children}
    </div>
  )
}

export default observer(TopBar)
