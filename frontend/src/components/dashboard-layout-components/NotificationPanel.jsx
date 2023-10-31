const NotificationPanel = ({ notifications }) => {
  return (
    <div
      className={
        "w-72 min-h-[55vh] max-h-[calc(100vh-3rem)] p-4 flex flex-col rounded-xl bg-[#3D7AE5]/10 text-white"
      }
    >
      <div className="flex justify-center font-bold text-xl mb-4">
        Notifications
      </div>
      <div className="text-sm">
        <ul>
          {notifications.map((notifLine) => {
            return (
              <li key={notifLine.heading}>
                <div>
                  <span>{notifLine.type}</span>
                  <span>{notifLine.heading}</span>
                </div>
                <div>{notifLine.information}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NotificationPanel;
