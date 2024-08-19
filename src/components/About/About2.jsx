import AboutUs from "../../assets/images/3.png";
const About2 = () => {
  return (
    <div className="py-16 dark:bg-dark dark:text-white bg-white duration-200 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          {/* text section */}
          <div className="space-y-4">
            {/* Heading section */}
            <div className="flex  lg:items-center justify-center items-center lg:justify-start gap-4">
              <div className="text-primary text-6xl">
                <h1 data-aos="fade-down" className="font-bold">
                  02
                </h1>
              </div>
              <div>
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="text-primary"
                >
                  Cool Fitness Running
                </p>
                <h1
                  data-aos="fade-left"
                  data-aos-delay="300"
                  className="text-2xl sm:text-4xl font-bold"
                >
                  Our Values
                </h1>
              </div>
            </div>
            {/* bottom section */}
            <div>
              <p
                data-aos="fade-down"
                data-aos-delay="400"
                className="lg:w-[30rem] text-1xl sm:text-[1.3rem] "
              >
                We believe that running is for everyone, regardless of age,
                pace, or experience level. Our community welcomes runners from
                all walks of life. We are here to encourage and motivate each
                other, every step of the way. We share stories, tips, and advice
                to help you stay motivated and inspired. We are more than just a
                website We are a community of runners who support and uplift
                each other.
              </p>
            </div>
            <button
              data-aos="fade-down"
              data-aos-delay="500"
              className="outline-btn"
            >
              Get Started
            </button>
          </div>
          {/* Image section */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="md:before:block md:before:absolute md:before:-inset-1 md:before:translate-y-6 md:before:bg-primary relative inline-block hover:before:translate-y-2 before:duration-200"
          >
            <img
              src={AboutUs}
              alt="about-image"
              className="sm:scale-105 max-h-[300px] drop-shadow-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
