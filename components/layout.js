import Navbar from "./navbar";
import Footer from "./footer";

import Meta from "./meta";
export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar lang={children[1].props} />
      <div>
        <main>{children}</main>
      </div>

      <Footer lang={children[1].props} />
    </>
  );
};
export default Layout;
