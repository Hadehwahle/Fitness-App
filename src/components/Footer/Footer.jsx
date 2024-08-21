import {
  BiPhoneCall,
  BiEnvelope,
  BiLogoPlayStore,
  BiLogoApple,
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import Logo from "../../assets/images/16.jpg";
import { Link } from "react-scroll";
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
  const currentYear = new Date().getFullYear();
  function handleSubscriber(e) {
    setSubscriber(e.target.value);
  }

  return (
    <>
      <footer className="bg-white w-full dark:bg-dark dark:text-white py-10">
        <div className="container flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <img
                src={Logo}
                alt="footer-logo"
                className="w-[4rem] md:w-28 rounded-full"
              />
            </div>
            <div>
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
          </div>
          <div className=" flex flex-col-reverse xl:flex-row justify-between">
            <div className="w-full flex flex-col lg:gap-20 xl:gap-10 md:flex-row md:gap-8 md:items-start items-center text-center   md:text-left mt-4">
              <div className="flex pb-6 md:pb-0">
                <ul className=" items-left flex flex-col">
                  <p className="font-semibold md:pb-4">Quick Links</p>
                  {navlinks.map(({ id, name, link }) => (
                    <li key={id}>
                      <Link
                        to={link}
                        smooth={true}
                        duration={800}
                        offset={-75}
                        className="inline-block text-[0.8rem] hover:text-primary duration-200 cursor-pointer font-semibold text-left"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col md:text-left">
                <div className="md:pb-4 pb-1">
                  <p className="font-semibold">Social Media</p>
                  <p className="text-[0.8rem]">
                    Follow us on social media to get updates.
                  </p>
                </div>
                <div className="flex md:justify-start justify-center gap-3 pb-6 md:pb-0">
                  <a
                    href="https://web.facebook.com/coolrunningsfitnessapp?_rdc=1&_rdr"
                    target="_blank"
                  >
                    <BiLogoFacebookCircle className="text-3xl cursor-pointer hover:text-[#1773ea] duration-200" />
                  </a>
                  <a
                    href="https://www.instagram.com/cool_runnings_fitness/"
                    target="_blank"
                  >
                    <BiLogoInstagramAlt className="text-3xl cursor-pointer hover:text-[#c535a0] duration-200" />
                  </a>
                  <a href="mailto:contact@coolrunningsfitenss.com">
                    <BiEnvelope className="text-3xl cursor-pointer duration-200 hover:text-primary" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 group duration-200 flex-col"></div>

              <div>
                <p className="font-semibold md:pb-4 pb-1">Download Our App</p>
                <div className=" flex flex-row  gap-6">
                  <div>
                    <button
                      className="flex items-center bg-black p-1  text-white rounded-lg dark:bg-white dark:text-black duration-200 hover:bg-black/80 hover:dark:bg-white/80"
                      type="button"
                    >
                      <div>
                        <BiLogoApple className="text-2xl lg:text-4xl" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-[0.5rem] text-left">
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
                      className="flex items-center bg-black p-1  text-white rounded-lg dark:bg-white dark:text-black duration-200 hover:bg-black/80 hover:dark:bg-white/80"
                      type="button"
                    >
                      <div>
                        <BiLogoPlayStore className="text-2xl lg:text-4xl" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-[0.5rem] text-left">
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
            <div className="flex flex-col items-center xl:items-start">
              <div className="text-center xl:text-left mt-4">
                <p className="font-semibold">Newsletter</p>
                <p className="text-[0.7rem]">Subscribe To Our Newsletter</p>
              </div>
              <div>
                <div className="bg-dark dark:bg-white sm:w-[25rem] p-[0.4rem] pl-[2rem] flex justify-between rounded-md duration-200">
                  <input
                    className="h-[2rem] border-none outline-none text-white dark:text-black bg-transparent text-[0.8rem] flex-[0.9] duration-200"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    id=""
                    value={subscriber}
                    onChange={handleSubscriber}
                  />
                  <button className="w-[6.125rem]  bg-primary text-white font-bold px-[1rem] h-[1.8875rem] rounded-md cursor-pointer  hover:bg-primary/70 duration-200 text-[0.75rem]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-[0.5rem] pt-6">
          Cool Fitness Runnings/All Right Reserved &copy;{currentYear}
        </p>
      </footer>
    </>
  );
};

export default Footer;
