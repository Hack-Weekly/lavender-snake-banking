import { NavLink } from "react-router-dom";
import { navOptions } from "../../constants/navOptions";

const LeftSideBar = () => {
  return (
    <div className="max-h-[calc(100vh-3rem)] w-48 flex flex-col p-4 bg-accent/25 text-accent rounded-xl">
      <div className="text-center">LOGO</div>
      <div className="h-28 flex items-center justify-center border mx-6 mt-12 mb-2">
        Profile Image
      </div>
      <div className="text-center">user</div>
      <nav className="mt-8 flex flex-col items-center flex-auto">
        <ul className="flex flex-col gap-2 text-lg text-lightest">
          {navOptions.map((navOption) => {
            return (
              <li key={navOption.name}>
                <NavLink
                  to={navOption.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-2 py-1 rounded-md ${
                      isActive ? "bg-grey/40" : ""
                    }`
                  }
                >
                  <navOption.icon size={18} strokeWidth={1} /> {navOption.name}
                </NavLink>
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
