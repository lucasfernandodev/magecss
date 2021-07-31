import style from "./style.module.css";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import Label from "../../Label";

type ButtonType = {
  slug: string;
  isLiked: string;
  onClick: () => void;
  size?: string;
};

async function fetcher(...args: [string]) {
  const res = await fetch(...args);
  return res.json();
}

const ButtonLike = ({ slug, isLiked, onClick, size }: ButtonType) => {
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
    <button
      className={`${!userLiked ? style.like : style.unlike} ${style.button}`}
      onClick={onClick}
    >
      <Label
        size={size}
        icon="heart"
        text={`${likeCount > 0 ? likeCount : ""} ${
          likeCount === 1 ? "Reação" : "Reações"
        }`}
      />
    </button>
  );
};

export default ButtonLike;
