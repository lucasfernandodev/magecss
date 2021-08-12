import NextHead from "next/head";
import { HOME_OG_IMAGE_URL, BASE_URL } from "../../../lib/constants";

type HeadProp = {
  title: string;
  ogImage?: string | undefined;
};

const Head = ({ title, ogImage }: HeadProp) => {
  return (
    <NextHead>
      {title ? (
        <title>{title} - MAGE CSS</title>
      ) : (
        <title>MAGE CSS - Dicas de front-end</title>
      )}

      
      {ogImage != "undefined" ? (
        <meta property="og:image" content={`${BASE_URL}${ogImage}`} />
      ) : (
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      )}
    </NextHead>
  );
};

export default Head;
