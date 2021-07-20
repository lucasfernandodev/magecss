import Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  category: string
  summary: string
  ogImage: {
    url: string
  }
  content: string
  readTime: string
}

export default PostType
