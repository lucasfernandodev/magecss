
import StoryBlock from './StoryBlock'
import StoryRow from './StoryRow'
import TagType from "@/types/tag";

type Props = {
  title: string;
  thumbnail: string;
  date: string;
  slug: string;
  tags: TagType[];
  reading_time?: number;
  layout: Extract<"row" | "block", string>;
  excerpt?: string;
  featured?: boolean;
};

export default function PostStory (props : Props){
  return (
    <>
    {props.layout == "row" ? <StoryRow  data={props} type="row"/>: null}
    {props.layout == "block" ? <StoryBlock data={props} type="block" /> : null}
    </>
  )
}
