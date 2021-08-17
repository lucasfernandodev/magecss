import {DiscussionEmbed} from "disqus-react"

type Post = {
    post : {
        id: string,
        title: string
        slug: string
    }

}

const CommentsTemplate = ({ post } : Post) => {
  const disqusShortname = "Magecss"

  const disqusConfig = {
    url: `http://localhost:3000/posts/${post.slug}`,
    identifier: post.id,
    title: post.title
  }

  return (
    <div style={{display: 'block', width: '100%'}} id="comentarios">
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default CommentsTemplate;