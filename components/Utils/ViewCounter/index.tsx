import { useEffect } from "react";
import useSWR from "swr";
import Label from "../../Label";
import style from "./style.module.css";

async function fetcher(...args: [string]) {
  const res = await fetch(...args);

  return res.json();
}

type ViewCountProp = {
  slug: string;
  observer: boolean;
  size?: string;
};

export default function ViewCounter({ slug, observer, size }: ViewCountProp) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    if (observer) {
      const registerView = () =>
        fetch(`/api/views/${slug}`, {
          method: "POST",
        });

      registerView();
    }
  }, [slug]);

  return (
    <p className={`${style.viewCounter} ${style[`${size ? size : ""}`]}`}>
      <Label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
        </svg>
        <span>
          {`${views > 0 ? views.toLocaleString() : ""} ${views === 1 ? 'Visualização' : 'Visualizações'}`}
        </span>
      </Label>
    </p>
  );
}
