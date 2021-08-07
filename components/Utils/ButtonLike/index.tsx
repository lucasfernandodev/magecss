import style from "./style.module.css";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import Label from "../../Atoms/Label";
import Icon from "../Icon";

type ButtonType = {
  slug: string;
  isLiked: string;
  onClick: () => void;
  size?: string;
  countReact?: number
};

async function fetcher(...args: [string]) {
  const res = await fetch(...args);
  return res.json();
}

const ButtonLike = ({ slug, isLiked, onClick, size, countReact }: ButtonType) => {
  const { data } = useSWR(`/api/likes/${slug}`, fetcher);

  const [userLiked, setUserLiked] = useState(data?.total.isLiked);
  const [likeCount, setLikeCount] = useState(data?.total.likes);

  useEffect(() => {
    setLikeCount(data?.total.likes);
    setUserLiked(data?.total.isLiked);
  }, [data]);

  useEffect(() => {
    if (isLiked == "like" || isLiked == "unlike") {
      const registerLike = () =>
        fetch(`/api/likes/${slug}`, {
          method: "POST",
        });

      registerLike().then((success) => {
        success.json().then((successData) => {
          setUserLiked(successData.total.isLiked);
          setLikeCount(successData.total.likes);
        });
      });
    }
  }, [isLiked]);

  return (
    <>
    <button
      className={`${!userLiked ? style.like : style.unlike} ${style.button}`}
      onClick={onClick}
    >
      <Icon icon="heart" width={24} height={24}/>
    </button>

    <Label
        size={size}

        text={`${likeCount > 0 ? likeCount : ""} ${
          likeCount === 1 ? "Reação" : "Reações"
        }`}
      />
    </>

  );
};

export default ButtonLike;
