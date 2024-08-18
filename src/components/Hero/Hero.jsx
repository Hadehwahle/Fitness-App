import background from "../../assets/images/9.png";
import background2 from "../../assets/images/3.png";
import background3 from "../../assets/images/5.png";
import Highlights from "./Highlights";
import Form from "../Contact/Form";
import Slider from "react-slick";

const imageList = [
  {
    id: 1,
    img: background,
    heading: "Start Your Running Journey",
    title: "Your Running Journey Begins!",
    content:
      "Feel the rhythm, embrace the journey, and watch as every step transforms you.",
  },
  {
    id: 2,
    img: background2,
    heading: "Start Your Running Journey",
    title: "Discover Your Potential Through Running!",
    content:
      "Feel the rhythm, embrace the journey, and watch as every step transforms you.",
  },
  {
    id: 3,
    img: background3,
    heading: "Start Your Running Journey",
    title: "Every run is a journey, and every journey is a story!",
    content:
      "Feel the rhythm, embrace the journey, and watch as every step transforms you.",
  },
];

const bgStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Hero = ({ toggleForm, formPop }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div id="home" className="overflow-x-hidden">
      <Slider {...settings}>
        {imageList.map(({ id, heading, content, title }) => (
          <div
            style={bgStyle}
            className=" dark:bg-black dark:text-white duration-200 w-full"
            data-aos="fade-up"
            data-aos-delay="900"
            key={id}
          >
            <div
              data-aos="fade-down"
              className="bg-white/80 dark:bg-dark/80 duration-200"
            >
              <div className="container min-h-[80dvh] flex items-center">
                <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
                  <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="text-primary text-2xl font-semibold"
                  >
                    {heading}
                  </p>
                  <h1
                    data-aos="zoom-out"
                    data-aos-delay="600"
                    className=" text-4xl md:text-6xl font-bold"
                  >
                    {title}
                  </h1>
                  <p
                    data-aos="fade-down"
                    data-aos-delay="300"
                    className="text-2xl font-semibold"
                  >
                    {content}
                  </p>
                  <button
                    data-aos-delay="900"
                    data-aos="fade-up"
                    className="primary-btn"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Highlights />

      <Form toggleForm={toggleForm} formPop={formPop} />
    </div>
  );
};

export default Hero;
