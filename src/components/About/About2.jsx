import AboutUs from "../../assets/images/3.png";
const About2 = () => {
  return (
    <div className="py-16 dark:bg-dark dark:text-white bg-white duration-200">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          {/* text section */}
          <div className="space-y-4">
            {/* Heading section */}
            <div className="flex items-center gap-4">
              <div className="text-primary text-7xl">
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
                  data-aos="fade-up-right"
                  data-aos-delay="500"
                  className="text-2xl sm:text-4xl font-bold"
                >
                  Our Values
                </h1>
              </div>
            </div>
            {/* bottom section */}
            <div>
              <p data-aos="fade-down-right" data-aos-delay="700" className="">
                We believe that running is for everyone, regardless of age,
                <br /> pace, or experience level. Our community welcomes runners
                <br />
                from all walks of life. We are here to encourage and motivate{" "}
                <br />
                each other, every step of the way. <br />
                We share stories, tips, and advice to help you stay motivated
                <br />
                and inspired. We are more than just a website <br /> We are a
                community of runners who support and uplift each other.
              </p>
            </div>
            <button
              data-aos="fade-down"
              data-aos-delay="700"
              className="outline-btn"
            >
              Get Started
            </button>
          </div>
          {/* Image section */}
          <div
            data-aos="flip-up"
            data-aos-delay="1200"
            className="before:block before:absolute before:-inset-1 before:translate-y-6 before:bg-primary relative inline-block hover:before:translate-y-2 before:duration-200"
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
