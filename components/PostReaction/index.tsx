import style from "./style.module.css";
import Tags from "../Tags";
import Link from "next/link";
type Props = {
  tags: string;
  likes: number;
};
const PostReaction = ({ tags, likes }: Props) => {
  const tagsToArray = tags.split(" ");
  return (
    <div className={style.postreaction}>
      <div className={style.postreaction__tags}>
        <Tags tags={tagsToArray} />
      </div>
      <div className={style.postreaction__reaction}>
        <div className={style.postreaction__reactInline}>
          <div className={style.postreaction__hearth}>
            <button>
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
            </button>
            <span>{likes}</span>
          </div>
          <div className={style.postreaction__comment}>
            <button>
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
                <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"></path>
                <line x1="8" y1="9" x2="16" y2="9"></line>
                <line x1="8" y1="13" x2="14" y2="13"></line>
              </svg>
            </button>
          </div>
        </div>

        <ul className={style.postreaction__shared}>
          <li className={style.postreaction__item}>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.75"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
