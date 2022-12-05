import { useState } from "react";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="w-full py-5 flex items-center justify-center px-6">
      <nav className="navbar container mx-auto h-[65px] flex items-center justify-between px-6 text-[#7c7c7c] font-semibold md:h-[80px]">
        <div>
          <img src={Logo} alt="logo" className="w-[50px] object-cover" />
        </div>
        <div className="">
          <ul
            className={`${
              toggleMenu ? "opacity-100 duration-300" : "opacity-0 duration-300"
            } flex absolute top-16 right-0 bg-zinc-800 p-5 rounded flex-col space-y-3 md:flex-row md:static md:bg-transparent md:space-x-5 md:space-y-0 md:opacity-100`}
          >
            <li>
              <a
                href="#home"
                className="hover:text-gray-300 duration-300"
                onClick={handleToggle}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-300 duration-300"
                onClick={handleToggle}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="hover:text-gray-300 duration-300"
                onClick={handleToggle}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-300 duration-300"
                onClick={handleToggle}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          className="block md:hidden w-[25px] mr-3 cursor-pointer"
          onClick={handleToggle}
        >
          {toggleMenu ? (
            <>
              <div className="w-[24px] h-[2px] my-2 bg-white absolute rotate-45 duration-300"></div>
              <div className="w-[24px] h-[2px] my-2 bg-white -rotate-45 duration-300"></div>
            </>
          ) : (
            <>
              <div className="w-[24px] h-[2px] my-2 bg-white duration-300"></div>
              <div className="w-[24px] h-[2px] my-2 bg-white duration-300"></div>
              <div className="w-[24px] h-[2px] my-2 bg-white duration-300"></div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
