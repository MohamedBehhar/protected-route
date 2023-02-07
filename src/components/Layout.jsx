import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="md:container md:mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
