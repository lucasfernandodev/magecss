import Icon from "@/components/Utils/Icon";
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import useSWR from "swr";

type ButtonLikeProp = {
  onClick?: () => void;
  slug: string;
};

async function fetcher(...args: [string]) {
  const res = await fetch(...args);
  return res.json();
}

const ButtonLike = ({
  onClick,
  slug,
}: ButtonLikeProp) => {
  const [isState, setIsState] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [like, setLike] = useState("");

  function likeHandler() {
    return like == "like" ? setLike("unlike") : setLike("like");
  }

  const { data } = useSWR(`/api/likes/${slug}`, fetcher);

  const res: { total: { likes: number; isLiked: boolean } } = data || null;

  useEffect(() => {
    if (res !== null) {
      setIsState(res.total.isLiked);
      setLikeCount(res.total.likes);
    }
  }, [data]);

  useEffect(() => {
    if (like != "") {
      const registerLike = () =>
        fetch(`/api/likes/${slug}`, {
          method: "POST",
        });

      registerLike().then((success) => {
        success.json().then((successData) => {
          setIsState(successData.total.isLiked);
          setLikeCount(successData.total.likes);
        });
      });
    }
  }, [like]);

  return (
    <button
      className={`${isState == true ? styles.buttonLike : styles.buttonUnlike}`}
      onClick={() => {
        likeHandler();
      }}
    >
      <span className={styles.buttonLike__icon}>
        <Icon icon="heart" width={20} height={20} strokeWidth={2} />
      </span>
      <span className={styles.buttonLike__reaction}>{likeCount} <span>Reações</span></span>
    </button>
  );
};

export default ButtonLike;
