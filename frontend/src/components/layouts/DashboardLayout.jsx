import {Outlet} from "react-router-dom";
import LeftSideBar from "../dashboard-layout-components/LeftSideBar";
import AccountInfo from "../dashboard-layout-components/AccountInfo";
import NotificationPanel from "../dashboard-layout-components/NotificationPanel.jsx";
import {sampleNotif} from "../../constants/sampleNotif.js";

import Logo from "../../assets/Logo.png";

const DashboardLayout = () => {
    return (
        <div className="min-h-[100vh] p-6 bg-darkest flex">
            <LeftSideBar
                user={"aJoy"}
            />
            <div className="ml-10 text-lightest flex-auto">
                <div className={"flex justify-between items-center"}>
                    <header className="font-semibold text-2xl align-top">Dashboard</header>

                </div>

                <main className="">
                    <Outlet/>
                </main>
            </div>
            <div className={"flex flex-col"}>
                <div className={"py-5"}>
                    <AccountInfo
                        accInfo={"123-XXX-XXX"}
                    />
                </div>
                <div className={"py-5"}>
                    <NotificationPanel
                        notifications={sampleNotif}
                    />
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;
