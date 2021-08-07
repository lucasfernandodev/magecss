import Tags from "../../Molecules/Tags";
import ButtonLike from "@/components/Molecules/ButtonLike";
import ButtonComment from "@/components/Molecules/ButtonComment";
import Box from "@/components/Atoms/Box";
import {useState} from "react"
type Props = {
  tags: string;
  slug: string;
};

const PostReaction = ({ tags, slug }: Props) => {



  return (
    <Box direction="column" gap="16px" width="100%">
    <Tags tags={tags} limitTags={3} />

    <Box justifyContent="space-between" width="100%" alignItens="center">
      <Box justifyContent="flex-end">
        <ButtonLike  slug={slug} state={false} countReact={10}  />
        <ButtonComment onClick={() => {}} />
      </Box>
    {/* {console.log('button', like)} */}
      <Box justifyContent="flex-end">
       <span>Redes sociais</span>
      </Box>
    </Box>
  </Box>
  );
};

export default PostReaction;
