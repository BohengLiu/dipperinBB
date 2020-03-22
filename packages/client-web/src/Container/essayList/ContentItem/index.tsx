import React, { useMemo } from 'react'
import styles from './index.module.scss'
import { formatTime } from 'Utils/formatters'
import { LikeFilled, MessageFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'

interface Props {
  slug: string
  url: string
  title: string
  uts: number // update timestamp
  authorName: string
  likeCount: number
  commentCount: number
  tags?: string[]
  img?: string
  onLike: (slug: string) => void
}

const ContentItem: React.FC<Props> = ({
  slug,
  url,
  title,
  uts,
  authorName,
  tags,
  likeCount,
  commentCount,
  img,
  onLike,
}) => {
  const handleLike = useMemo(() => () => onLike(slug), [onLike,slug])

  return (
    <div className={styles.itemBox}>
      <div className={styles.leftPart}>
        <div className={styles.contentInfo}>
          <span className={styles.author}>{authorName} • </span>
          <span className={styles.ut}>{formatTime(uts)}</span>
          {tags && tags.map(tag => (
            <span className={styles.tag}>{tag}</span>
          ))}
        </div>
        <Link to={url} className={styles.contentTitle}>
          {title}
        </Link>
        <div className={styles.actionBox}>
          <button className={styles.like} onClick={handleLike}>
            <LikeFilled />
            <span>{likeCount}</span>
          </button>
          <button className={styles.comment}>
            <MessageFilled />
            <span>{commentCount}</span>
          </button>
        </div>
      </div>
      {img && (
        <div className={styles.rightPart}>
          <img src={img} alt="" />
        </div>
      )}
    </div>
  )
}

// class ContentItem extends React.Component<Props> {
//   render() {
//     const essay = this.props.essay
//     return (
//       <div className="essay-item">
//         <div className="left">
//           <div className="avatar">{essay.author[0]}</div>
//           <div className="info">
//             <div className="essay-title" onClick={this.props.onTurn}>
//               {essay.essayTitle}
//             </div>
//             <div className="create-time">
//               {essay.createTime} • {essay.author}
//             </div>
//           </div>
//         </div>
//         <div className="right">
//           <div className="data">
//             <div className="amount">{essay.earn}</div>
//             <div className="type">B</div>
//           </div>
//           <div className="data">
//             <div className="amount">{essay.like}</div>
//             <div className="type">点赞</div>
//           </div>
//           <div className="data">
//             <div className="amount">{essay.reply}</div>
//             <div className="type">回帖</div>
//           </div>
//           <div className="data">
//             <div className="amount">{essay.visit}</div>
//             <div className="type">浏览</div>
//           </div>
//         </div>
//         <div className="more">
//           <svg width="30" height="20">
//             <rect x="0" y="8" height="5" width="5" style={{ fill: '#ddd' }} />
//             <rect x="6" y="8" height="5" width="5" style={{ fill: '#ddd' }} />
//             <rect x="12" y="8" height="5" width="5" style={{ fill: '#ddd' }} />
//           </svg>
//           {/* <div className="choices">
//             <div className="choice">关注</div>
//             <div className="choice">收藏</div>
//           </div> */}
//         </div>
//       </div>
//     )
//   }
// }

export default ContentItem
