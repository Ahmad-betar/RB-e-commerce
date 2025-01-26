import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const ProtectedPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProtectedPage;
