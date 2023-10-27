import {NavLink} from "react-router-dom";
import {navOptions} from "../../constants/navOptions";
import {HelpCircle} from "lucide-react";

const LeftSideBar = () => {
    return (
        <div className="max-h-[calc(100vh-3rem)] w-60 flex flex-col p-4 bg-[#3D7AE5]/10 text-accent rounded-xl">
            <div className="text-center">LOGO</div>
            <div className="h-28 flex items-center justify-center border mx-6 mt-12 mb-2">
                Profile Image
            </div>

            <div className="text-center">user</div>

            <div className="py-10"></div>

            <nav className="flex flex-col items-center flex-auto">
                <ul className="flex flex-col gap-2 text-lg text-lightest">
                    {navOptions.map((navOption) => {
                        return (
                            <li key={navOption.name}>
                                <NavLink
                                    to={navOption.path}
                                    className={({isActive}) =>
                                        `flex items-center gap-2 px-2 py-1 rounded-md my-1.5 transition-colors hover:bg-gradient-to-r from-[#3E79E5] to-[#01B8E3] hover:text-transparent hover:bg-clip-text hover:bg-clip-icon duration-150  ${
                                            isActive ? "text-white bg-white/20" : ""
                                        }`
                                    }
                                >
                                    <navOption.icon size={18} strokeWidth={1}/>
                                    {navOption.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                <ul className="text-lg text-lightest mt-auto">
                    <li>
                        <NavLink
                            to={"./home"}
                            className={({isActive}) =>
                                `flex items-center gap-2 px-2 py-1 rounded-md my-1.5 transition-colors 
                                hover:bg-gradient-to-r from-[#3E79E5] to-[#01B8E3] hover:text-transparent hover:bg-clip-text hover:bg-clip-icon 
                                before:
                                duration-150  ${
                                    isActive ? "text-white bg-white/20 " : ""
                                }`
                            }
                        >
                            <HelpCircle size={18} strokeWidth={1}/>
                            {"Help"}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default LeftSideBar;
