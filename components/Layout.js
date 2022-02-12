import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import Meta from "./Meta";
export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <NavBar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
