import About2 from "./About2";
import AboutUs from "../../assets/images/8.png";
const About = () => {
  return (
    <div className="overflow-hidden text-center md:text-left">
      <div
        id="about"
        className="py-16 dark:bg-black dark:text-white bg-slate-100 duration-200"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 place-items-center">
            {/* Image section */}
            <div
              data-aos="fade-down"
              className="md:before:block md:before:absolute md:before:-inset-1 md:before:-translate-x-6 md:before:bg-primary relative inline-block hover:before:-translate-x-2 before:duration-200"
            >
              <img
                src={AboutUs}
                alt="about-image"
                className="sm:scale-105 max-h-[300px] drop-shadow-md mx-auto"
              />
            </div>
            {/* text section */}
            <div className="space-y-4">
              {/* Heading section */}
              <div className="flex lg:items-center justify-center items-center lg:justify-start gap-4 ">
                <div className="text-primary text-6xl">
                  <h1
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="font-bold"
                  >
                    01
                  </h1>
                </div>
                <div>
                  <p
                    data-aos="fade-down"
                    data-aos-delay="400"
                    className="text-primary"
                  >
                    Cool Fitness Running
                  </p>
                  <h1
                    data-aos="fade-left"
                    data-aos-delay="500"
                    className="text-2xl sm:text-4xl font-bold"
                  >
                    About Us
                  </h1>
                </div>
              </div>
              {/* bottom section */}
              <div>
                <p
                  className="lg:w-[30rem] text-[1.3rem]"
                  data-aos="fade-right "
                  data-aos-delay="600"
                >
                  Welcome to the Cool Runnings Fitness! We have a passion for
                  runners, helping them on their journey and creating a
                  community. CRF is all about improving the runner experience,
                  inspiring them to stay motivated and live a healthier life.
                </p>
              </div>
              <button
                data-aos="fade-up"
                data-aos-delay="700"
                className="outline-btn"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <About2 />
    </div>
  );
};

export default About;
