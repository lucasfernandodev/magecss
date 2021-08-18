import { unified } from "unified";
import parse from 'rehype-parse'
import rehype2remark from 'rehype-remark'
import stringify from 'remark-stringify'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
  .use(parse)
  .use(rehype2remark)
  .use(stringify)
  .processSync(markdown);
  return result.toString();
}