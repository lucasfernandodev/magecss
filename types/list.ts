import Topics from './topics';

type ListType = {
  title: string;
  tag: string;
  target?: string | undefined;
  data: Topics[];
};

export default ListType;