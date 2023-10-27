import {Outlet} from "react-router-dom";
import LeftSideBar from "../dashboard-layout-components/LeftSideBar";
import AccountInfo from "../dashboard-layout-components/AccountInfo";
import NotificationPanel from "../dashboard-layout-components/NotificationPanel.jsx";

const DashboardLayout = () => {
    return (
        <div className="min-h-[100vh] p-6 bg-darkest flex">
            <LeftSideBar/>
            <div className="ml-10 text-lightest flex-auto">
                <header className="mb-6 font-semibold text-2xl">Dashboard</header>
                <main className="">
                    <Outlet/>
                </main>
            </div>
            <div className={"flex flex-col"}>
                <div className={"py-10"}>
                    <AccountInfo />
                </div>
                <div className={"py-10"}>
                    <NotificationPanel />
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;
