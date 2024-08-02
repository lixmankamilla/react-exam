import { Outlet } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import "./PageLayout.scss";

const PageLayout = () => {
  return (
    <div className="page-layout-wrapper">
      <Header />
      <div className="page-layout-inner">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
