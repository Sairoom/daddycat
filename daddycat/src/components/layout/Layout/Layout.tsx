import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { useDocumentTitle } from '../../../hooks/useDocumentTitle';
import './Layout.scss';

const Layout = () => {
  const { pathname } = useLocation();
  useDocumentTitle(pathname);

  return (
    <div className="layout">
      <ScrollToTop />
      <Header />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
