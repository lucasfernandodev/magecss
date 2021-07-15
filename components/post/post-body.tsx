import markdownStyles from './markdown-styles.module.css'
import styles from './style.module.css';
type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className={styles.postBody}>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
