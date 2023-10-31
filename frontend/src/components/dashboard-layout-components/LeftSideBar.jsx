import { NavLink } from "react-router-dom";
import { navOptions } from "../../constants/navOptions";
import { HelpCircle } from "lucide-react";

const LeftSideBar = ({ user }) => {
  return (
    <div className="max-h-[calc(100vh-3rem)] w-48 flex flex-col p-4 bg-[#3D7AE5]/10 text-accent rounded-xl">
      <div className="flex">
        <span className="font-bold italic text-md bg-gradient-to-r from-[#3E79E5] to-[#01B8E3] text-transparent bg-clip-text text-center">
          Lavender Snake Banking
        </span>
      </div>
      <div className="">
        <div className="h-30 flex items-center justify-center mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-28"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <div className="text-center text-xl bg-gradient-to-r from-[#3E79E5] to-[#01B8E3] text-transparent bg-clip-text">
          {user}
        </div>
      </div>

      <nav className="flex flex-col items-center flex-auto mt-6">
        <ul className="flex flex-col text-lg text-lightest">
          {navOptions.map((navOption) => {
            return (
              <li key={navOption.name}>
                <NavLink
                  to={navOption.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-2 py-1 rounded-md my-1.5 transition-colors hover:text-accent duration-150  ${
                      isActive ? "text-white bg-white/20" : ""
                    }`
                  }
                >
                  <navOption.icon size={18} strokeWidth={1} />
                  {navOption.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <ul className="text-lg text-lightest mt-auto mr-3">
          <li>
            <NavLink
              to={"./home"}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded-md my-1.5 transition-colors hover:text-accent duration-150  ${
                  isActive ? "text-white bg-white/20 " : ""
                }`
              }
            >
              <HelpCircle size={18} strokeWidth={1} />
              {"Help"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftSideBar;
