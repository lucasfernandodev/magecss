import style from "./style.module.css";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import Label from "../Label";

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
      <Label size={size}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
        </svg>

        {`${likeCount > 0 ? likeCount : ""}`}
      </Label>
    </button>
  );
};

export default ButtonLike;
