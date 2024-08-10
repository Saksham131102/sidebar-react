import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <section className="flex-1">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
