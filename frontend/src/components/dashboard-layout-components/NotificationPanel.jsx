import {LayoutDashboardIcon} from "lucide-react";

const NotificationPanel = ( { notifications } ) => {
    return (
        <div className={"w-72 min-h-[55vh] max-h-[calc(100vh-3rem)] flex flex-col rounded-xl bg-[#3D7AE5]/10 text-white"}>
            <div className={"flex py-6 justify-center font-bold text-2xl"}>
                Notifications
            </div>
            <div>
                <ul>
                    {notifications.map((notifLine) => {
                        return (
                            <li key={notifLine.heading}>
                                <div>
                                    <span>
                                        {notifLine.type}
                                    </span>
                                    <span>
                                        {notifLine.heading}
                                    </span>
                                </div>
                                <div>
                                    {notifLine.information}
                                </div>

                            </li>
                        );
                    })}
                </ul>
            </div>

        </div>
    );
};

export default NotificationPanel;
