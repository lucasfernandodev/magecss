import TagType from './tag'

type PostType = {
  id: string;
  slug: string,
  title: string,
  excerpt: string,
  published_at: string,
  feature_image: string,
  html: string,
  tags: TagType[],
  views?: number;
  reading_time: number;
}

export default PostType
