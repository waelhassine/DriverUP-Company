import NavBar from "./navBar";
import Footer from "./footer";

import Meta from "./meta";
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
