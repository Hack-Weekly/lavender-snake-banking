import { Outlet } from "react-router-dom";
import LeftSideBar from "../dashboard-layout-components/LeftSideBar";

const DashboardLayout = () => {
  return (
    <div className="min-h-[100vh] p-6 bg-darkest flex">
      <LeftSideBar />
      <div className="ml-10 text-lightest flex-auto">
        <header className="mb-6 font-semibold text-2xl">Dashboard</header>
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
