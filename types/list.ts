import Tag from './tag';

 type listLinks = {
  id: string;
  title: string;
  slug:string;
}

type ListType = {
  id: string;
  title: string;
  tag: Tag[];
  slug: string;
  content: listLinks[],
  count: {
    posts: number
  }
};

export default ListType;