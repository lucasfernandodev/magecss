import remark from "remark";
import Gfm from "remark-gfm";
import html from "remark-html";
import prism from "remark-prism";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(Gfm).use(prism).use(html).process(markdown);
  return result.toString();
}