import style from "./style.module.css";
import Tags from "../Tags";
import { useState } from "react";
import Link from "next/link";
import ButtonLike from "../Utils/ButtonLike";
import Label from "../Label";
import Icon from "../Icon";

type Props = {
  tags: string;
  slug: string;
};

const PostReaction = ({ tags, slug }: Props) => {
  const [isLiked, setIsLiked] = useState(" ");

  const tagsToArray = tags.split(" ");
  return (
    <div className={style.postreaction}>
      <div className={style.postreaction__tags}>
        <Tags tags={tagsToArray} />
      </div>
      <div className={style.postreaction__reaction}>
        <div className={style.postreaction__reactInline}>
          <ButtonLike
            size="large"
            isLiked={isLiked}
            slug={slug}
            onClick={() => setIsLiked(isLiked == "like" ? "unlike" : "like")}
          />
          <div className={style.postreaction__comment}>
            <button>
              <Label icon="comment" text="" />
            </button>
          </div>
        </div>

        <ul className={style.postreaction__shared}>
          <li className={style.postreaction__item}>
            <Icon icon="linkedin" />
          </li>
          <li className={style.postreaction__item}>
            <Icon icon="twitter" />
          </li>
          <li className={style.postreaction__item}>
            <Icon icon="facebook" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostReaction;
