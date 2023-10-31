import { Outlet } from "react-router-dom";
import LeftSideBar from "../dashboard-layout-components/LeftSideBar";
import AccountInfo from "../dashboard-layout-components/AccountInfo";
import NotificationPanel from "../dashboard-layout-components/NotificationPanel.jsx";
import { sampleNotif } from "../../constants/sampleNotif.js";
import DashboardHeader from "../dashboard-layout-components/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="min-h-[100vh] p-6 bg-darkest flex">
      <LeftSideBar user={"aJoy"} />
      <div className="ml-10 text-lightest flex-auto">
        <div className={"flex justify-between items-center mb-4"}>
          <DashboardHeader />
        </div>
        <main className="">
          <Outlet />
        </main>
      </div>
      <div className={"flex flex-col"}>
        <div className="flex flex-col gap-6">
          <AccountInfo accInfo={"123-XXX-XXX"} />
          <NotificationPanel notifications={sampleNotif} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
