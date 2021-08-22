import Meta from "@/Utils/Meta";
import Header from "@/Organisms/PageHeader";
import Footer from "@/Organisms/PageFooter";

type Props = {
  pageType?: string;
  simply?: boolean;
};

const Layout: React.FC<Props> = ({ children, pageType, simply }) => {
  if (simply == true) {
    return (
      <>
        <Meta />
        <main>{children}</main>
      </>
    );
  } else {
    return (
      <>
        <Meta />
        {pageType == "primary" ? <Header bg="primary" /> : <Header />}
        <main>{children}</main>
        <Footer />
      </>
    );
  }
};

export default Layout;
