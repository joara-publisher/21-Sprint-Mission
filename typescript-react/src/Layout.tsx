import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function Layout() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/signup" || location.pathname === "/signin";

  return (
    <>
      {isAuthPage || <Nav />}
      <div>
        <Outlet />
      </div>
      {isAuthPage || <Footer />}
    </>
  );
}

export default Layout;
