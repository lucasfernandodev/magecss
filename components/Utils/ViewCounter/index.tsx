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
    <p className={`${style.viewCounter} ${style[`${size ? size : null}`]}`}>
      <Label icon="view" text={`${views > 0 ? views.toLocaleString() : ""} ${
            views === 1 ? "Visualização" : "Visualizações"
          }`} />
    </p>
  );
}
