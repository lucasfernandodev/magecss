import style from "./style.module.css";
import Tags from "../Tags";
import { useState } from "react";
import Link from "next/link";
import ButtonLike from "../ButtonLike";
import Label from "../Label";

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
              <Label size="large">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </Label>
            </button>
          </div>
        </div>

        <ul className={style.postreaction__shared}>
          <li className={style.postreaction__item}>
            <Link href="#">
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
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <line x1="8" y1="11" x2="8" y2="16"></line>
                <line x1="8" y1="8" x2="8" y2="8.01"></line>
                <line x1="12" y1="16" x2="12" y2="11"></line>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </Link>
          </li>
          <li className={style.postreaction__item}>
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
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
          </li>
          <li className={style.postreaction__item}>
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
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostReaction;
