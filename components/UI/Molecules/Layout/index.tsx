import Footer from "../../Organisms/PageFooter";
import Meta from "../../Atoms/Meta";
import Header from "../../Organisms/PageHeader";
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
