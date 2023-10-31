import { useLocation } from "react-router-dom";
import { navOptions } from "../../constants/navOptions";

const DashboardHeader = () => {
  const location = useLocation();
  const route = location.pathname.split("/")[1];

  const filteredNavOptions = navOptions.filter(
    (navOption) => navOption.path === `/${route}`
  );

  return (
    <header className="font-semibold text-2xl align-top">
      {filteredNavOptions[0].name}
    </header>
  );
};

export default DashboardHeader;
