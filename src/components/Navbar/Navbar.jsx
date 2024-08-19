import { BiPhoneCall } from "react-icons/bi";
import Logo from "../../assets/images/logo.png";
import Darkmode from "./Darkmode";
import { useState } from "react";
import { Link } from "react-scroll";

const navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "home",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "about",
  },
  {
    id: 3,
    name: "BLOG",
    link: "https://coolrunningsfitnessblog.com/",
  },
  {
    id: 4,
    name: "CONTACT",
    link: "contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky bg-white top-0  shadow-xl w-full dark:bg-dark dark:text-white z-50 py-2 ">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <img src={Logo} alt="logo" className="w-16 sm:w-28 md:m-2" />
            </div>
            <div>
              <ul className=" items-center gap-12 hidden xl:flex">
                {navlinks.map(({ id, name, link }) => (
                  <li key={id}>
                    <Link
                      to={link}
                      smooth={true}
                      duration={800}
                      offset={-75}
                      className="inline-block text-lg font-semibold text-[1rem] hover:text-primary duration-200 cursor-pointer"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden items-center gap-6 xl:flex">
              <div className="flex items-center gap-2 group duration-200">
                <BiPhoneCall className="text-2xl sm:text-3xl text-primary animate-pulse group-hover:scale-105 cursor-pointer" />
                <span className="text-[1.2rem] cursor-pointer">
                  +1 (859) 466-7907
                </span>
              </div>
              <Darkmode />
            </div>

            {!menuOpen ? (
              <div className="flex items-center gap-3 xl:hidden">
                <Darkmode />
                <i
                  className="bx bx-menu  text-2xl sm:text-4xl cursor-pointer"
                  onClick={() => setMenuOpen(!menuOpen)}
                ></i>
              </div>
            ) : (
              <div className=" items-center gap-3 xl:hidden flex">
                <Darkmode />
                <i
                  className="bx bx-x text-2xl sm:text-4xl cursor-pointer"
                  onClick={() => setMenuOpen(!menuOpen)}
                ></i>
              </div>
            )}
          </div>
        </div>
        <div
          className={`absolute xl:hidden top-[3rem] sm:top-[3.5rem] md:top-[4rem] left-0 w-full dark:bg-dark dark:text-white bg-white flex flex-col items-center font-semibold gap-6 text-lg transform transition-transform z-10 shadow-xl ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          {navlinks.map(({ id, name, link }) => (
            <Link
              to={link}
              smooth={true}
              duration={800}
              key={id}
              offset={-65}
              className="list-none w-full text-center p-4 hover:bg-primary hover:duration-200 cursor-pointer "
            >
              <li>
                {menuOpen && (
                  <Link
                    to={link}
                    smooth={true}
                    duration={1000}
                    offset={-60}
                    className="inline-block text-xl font-semibold text-[0.9rem] md:text-[1rem] dark:hover:text-white duration-200"
                  >
                    {name}
                  </Link>
                )}
              </li>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
