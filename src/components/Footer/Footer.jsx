import {
  BiPhoneCall,
  BiEnvelope,
  BiLogoPlayStore,
  BiLogoApple,
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import Logo from "../../assets/images/16.jpg";
import { Link } from "react-router-dom";

import { useState } from "react";

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

const Footer = () => {
  const [subscriber, setSubscriber] = useState("");

  function handleSubscriber(e) {
    setSubscriber(e.target.value);
  }

  return (
    <>
      <nav className="bg-white w-full dark:bg-dark dark:text-white z-50 py-12">
        <div className="container">
          <div className="flex  items-center justify-between">
            <div className="flex flex-col gap-4">
              <div>
                <h1 style={{ fontFamily: "Racing Sans One" }}>COOL FITNESS</h1>
              </div>
              <div className="flex justify-center gap-2">
                <Link
                  to="https://web.facebook.com/coolrunningsfitnessapp?_rdc=1&_rdr"
                  target="_blank"
                >
                  <BiLogoFacebookCircle className="text-2xl cursor-pointer hover:text-[#1773ea] duration-200" />
                </Link>
                <Link
                  to="https://www.instagram.com/cool_runnings_fitness/"
                  target="_blank"
                >
                  <BiLogoInstagramAlt className="text-2xl cursor-pointer hover:text-[#c535a0] duration-200" />
                </Link>
                <Link to="mailto:contact@coolrunningsfitenss.com">
                  <BiEnvelope className="text-2xl cursor-pointer duration-200 hover:text-primary" />
                </Link>
              </div>

              <div className="flex text-[0.8rem] items-center">
                <BiPhoneCall className=" text-primary animate-pulse group-hover:scale-105 cursor-pointer" />
                <span className=" cursor-pointer font-semibold">
                  &nbsp; +1 (502) 544-7761
                </span>
              </div>
              <div className="flex text-[0.8rem] items-center">
                <BiPhoneCall className=" text-primary animate-pulse group-hover:scale-105 cursor-pointer" />
                <span className="cursor-pointer font-semibold">
                  &nbsp; +1 (859) 466-7907
                </span>
              </div>
            </div>
            <div className="flex gap-6">
              <ul className=" items-left flex flex-col">
                {navlinks.map(({ id, name, link }) => (
                  <li key={id}>
                    <Link
                      to={link}
                      smooth={true}
                      duration={800}
                      offset={-75}
                      className="inline-block text-[0.7rem] font-semibold lg:text-[1rem] hover:text-primary duration-200 cursor-pointer"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2 group duration-200 flex-col"></div>
            <div>
              <p>Subscribe To Our Newsletter</p>
              <div className="bg-white flex w-[300px] h-[40px] rounded-lg items-center">
                <BiEnvelope className="text-black text-[2.1rem]" />

                <input
                  className="w-[185px] h-[40px] px-[10px] border-none outline-none text-black bg-white text-[0.8rem]"
                  type="email"
                  name="email"
                  id=""
                  value={subscriber}
                  onChange={handleSubscriber}
                />
                <button className="bg-primary text-white font-bold p-[1rem] h-[40px] rounded-md flex items-center  hover:bg-primary/70 duration-200 text-[0.7rem]">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="lg:flex-row flex flex-col gap-4">
              <div>
                <button
                  className="flex items-center bg-black p-4  text-white rounded-lg dark:bg-white dark:text-black duration-200 hover:bg-black/80 hover:dark:bg-white/80"
                  type="button"
                >
                  <div>
                    <BiLogoApple className="text-2xl lg:text-4xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[0.5rem]">
                      DOWNLOAD ON
                    </span>
                    <span className="text-[1rem] lg:text-[1.25rem] font-bold">
                      App Store
                    </span>
                  </div>
                </button>
              </div>

              <div>
                <button
                  className="flex items-center bg-black p-4  text-white rounded-lg dark:bg-white dark:text-black duration-200 hover:bg-black/80 hover:dark:bg-white/80"
                  type="button"
                >
                  <div>
                    <BiLogoPlayStore className="text-2xl lg:text-4xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[0.5rem]">
                      DOWNLOAD ON
                    </span>
                    <span className="text-[1rem] lg:text-[1.25rem] font-bold">
                      Play Store
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
