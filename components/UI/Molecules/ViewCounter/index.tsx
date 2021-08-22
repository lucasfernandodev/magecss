import Label from "@/Atoms/Label";
import { useEffect } from "react";
import useSWR from "swr";

async function fetcher(...args: [string]) {
  const res = await fetch(...args);

  return res.json();
}

type ViewCountProp = {
  slug: string;
  observer: boolean;
};

export default function ViewCounter({ slug, observer }: ViewCountProp) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    if (observer === true) {
      const registerView = () =>
        fetch(`/api/views/${slug}`, {
          method: "POST",
        });

      registerView();
    }
  }, [slug, observer]);

  return (
    <div>
      <Label icon="view" text={`${views > 0 ? views.toLocaleString() : ""} ${
            views === 1 ? "Visualização" : "Visualizações"
          }`} />
    </div>
  );
}
