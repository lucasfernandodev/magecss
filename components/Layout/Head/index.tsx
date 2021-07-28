import NextHead from "next/head";

const Head = ({ title, ogImage }: { title?: string, ogImage?: string }) => {
  return (
    <NextHead>
      {title ? <title>{title} - MAGE CSS</title> : <title>MAGE CSS - Dicas de front-end</title>}
      {ogImage ? <meta property="og:image" content={ogImage}/> : null}
    </NextHead>
  );
};

export default Head;
