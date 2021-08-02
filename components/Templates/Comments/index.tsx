import {DiscussionEmbed} from "disqus-react"

type Post = {
    post : {
        id: string,
        title: string
    }

}

const Comments = ({ post } : Post) => {
  const disqusShortname = "Magecss"

  const disqusConfig = {
    url: "http://localhost:3000/posts/preview",
    identifier: "article-id",
    title: "Title of Your Article"
  }

  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default Comments;