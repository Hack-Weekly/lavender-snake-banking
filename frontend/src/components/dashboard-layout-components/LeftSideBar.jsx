import { Link } from "react-router-dom";
import { navOptions } from "../../constants/navOptions";

const LeftSideBar = () => {
  return (
    <div className="max-h-[calc(100vh-3rem)] w-48 flex flex-col p-4 bg-accent/25 text-accent rounded-xl">
      <div className="text-center">LOGO</div>
      <div className="h-36 flex items-center justify-center border mx-4 mt-12 mb-2">
        Profile Image
      </div>
      <div className="text-center">user</div>
      <nav className="mt-12 flex flex-col items-center flex-auto">
        <ul className="flex flex-col items-start text-lg text-lightest">
          {navOptions.map((navOption) => {
            return (
              <li key={navOption.name}>
                <Link to={navOption.path}>{navOption.name}</Link>
              </li>
            );
          })}
        </ul>

        <ul className="text-lg text-lightest mt-auto">
          <li>Help</li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftSideBar;
