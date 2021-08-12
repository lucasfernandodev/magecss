import NextHead from "next/head";
import { HOME_OG_IMAGE_URL, BASE_URL } from "../../../lib/constants";

type HeadProp = {
  title: string;
  ogImage?: string | undefined;
};

const Head = ({ title, ogImage }: HeadProp) => {
  const OG_Thumbnail = ogImage ? ogImage : HOME_OG_IMAGE_URL;
  return (
    <NextHead>
      {title ? (
        <title>{title} - MAGE CSS</title>
      ) : (
        <title>MAGE CSS - Dicas de front-end</title>
      )}

  if(!ogImage === 'undefined'){}

      {OG_Thumbnail !== "undefined" ? (
        <meta property="og:image" content={`${BASE_URL}${ogImage}`} />
      ) : (
        <meta property="og:image" content={OG_Thumbnail} />
      )}
    </NextHead>
  );
};

export default Head;
