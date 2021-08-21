import Footer from "../../Organisms/PageFooter";
import Meta from "../../Atoms/Meta";
import Header from "../../Organisms/PageHeader";
type Props = {
  children: React.ReactNode;
  pageType?: string;
  simply?: boolean;
};

const Layout = ({ children, pageType,simply }: Props) => {


  if(simply == true){
    return (
      <>
        <Meta /> 
        <main>{children}</main>
      </>
    )
  }else{
      return (
        <>
          <Meta />
          {pageType == 'primary' ? <Header bg='primary' /> : <Header />}
          <main>{children}</main>
          <Footer />
        </>
      );
    }
  };

export default Layout;
