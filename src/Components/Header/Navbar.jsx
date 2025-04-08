import { NavLink } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { LuBookOpenCheck } from "react-icons/lu";
const Navbar = () => {
    // const navigate = useNavigate();

    return (
        <div className="shadow font-poppins">
            {/* <div className="flex-1">
              <img className="w-44" src="public/logo.png" alt="" />
            </div> */}
            {/* <div className="hidden md:flex gap-4">
                <NavLink to="/" className={({ isActive }) => isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>
                    Home
                </NavLink>
                <NavLink to="/courses" className={({ isActive }) => isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>
                    Courses
                </NavLink>
                <NavLink to="/events" className={({ isActive }) => isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>
                    Events
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>
                    About
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>
                    Contact
                </NavLink>
            </div> */}

            {/* Example of programmatic navigation */}
            {/* <div className="ml-4 hidden md:block">
                <button onClick={() => navigate("/courses")} className="btn btn-outline btn-sm">
                    Explore Courses
                </button>
            </div> */}


            <div>
                <div className="w-9/12 mx-auto py-4 flex justify-between items-center gap-22 ">

                    <div className=" flex gap-8 ">
                        <div className="border-r border-gray-400 flex gap-8 pr-12 ">
                            <img className="w-44 " src="public/logo.png" alt="" />
                        </div>
                        <div className="flex items-center gap-2">
                            <BiCategory className="text-3xl" />
                            <p className="text-xl">Category</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="hidden md:flex gap-8 text-[17px] font-poppins">
                                {[
                                    { to: "/", label: "Home" },
                                    { to: "/courses", label: "Courses" },
                                    { to: "/events", label: "Events" },
                                    { to: "/about", label: "About" },
                                    { to: "/contact", label: "Contact" },
                                ].map(({ to, label }) => (
                                    <NavLink
                                        key={to}
                                        to={to}
                                        className={({ isActive }) =>
                                            `relative pb-1 transition-all duration-300 
                                           hover:text-[#F79952] 
                                          ${isActive ? "text-[#F79952] after:scale-x-100" : "text-black after:scale-x-0"} 
                                           after:content-[''] after:absolute after:left-0 after:bottom-0 
                                            after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100`
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-2 text-xl items-center bg-[#F79952]   px-6 py-3 rounded-md ">
                            <LuBookOpenCheck className="text-2xl text-white font-semibold" />
                            <p className="text-white font-semibold">Get Course</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
