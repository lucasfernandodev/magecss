import Footer from "./Layout/PageFooter";
import Meta from "./Layout/Meta";
import Header from "./Layout/PageHeader";
type Props = {
  preview?: boolean;
  children: React.ReactNode;
  pageType?: string;
};

const Layout = ({ preview, children, pageType }: Props) => {
  return (
    <>
      <Meta />
      {pageType == 'primary' ? <Header bg='primary' /> : <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
