import Tags from "../../Molecules/Tags";
import ButtonLike from "@/components/Molecules/ButtonLike";
import ButtonComment from "@/components/Molecules/ButtonComment";
import Box from "@/components/Atoms/Box";
import SocialShareButtons from "@/components/Atoms/SocialShare";
import {useRouter} from 'next/router';
type Props = {
  tags: string;
  slug: string;
};

const PostReaction = ({ tags, slug }: Props) => {

  const Router = useRouter();
  const {asPath} = Router;
  return (
    <Box direction="column" gap="16px" width="100%">
    <Tags tags={tags} limitTags={3} />

    <Box justifyContent="space-between" width="100%" alignItens="center">
      <Box justifyContent="flex-end">
        <ButtonLike slug={slug} />
        <ButtonComment onClick={() => {}} />
      </Box>

      <Box justifyContent="flex-end">
       <SocialShareButtons url={asPath}/>
      </Box>
    </Box>
  </Box>
  );
};

export default PostReaction;
