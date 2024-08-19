import background from "../../assets/images/9.png";
import background2 from "../../assets/images/3.png";
import background3 from "../../assets/images/5.png";

import Form from "../Contact/Form";
import Slider from "react-slick";
import Content from "./Content";

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
      "The difference between a successful runner and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
  },
  {
    id: 3,
    img: background3,
    heading: "Start Your Running Journey",
    title: "Every run is a journey, and every journey is a story!",
    content:
      "Running is the greatest metaphor for life, because you get out of it what you put into it.",
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
    speed: 1000,
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
      <div
        className=" dark:bg-black dark:text-white duration-200"
        data-aos="fade-up"
        data-aos-delay="900"
        style={bgStyle}
      >
        <div
          data-aos="fade-down"
          className="bg-white/80 dark:bg-dark/80 duration-200"
        >
          <Slider {...settings}>
            {imageList.map(({ id, heading, content, title }) => (
              <Content
                heading={heading}
                content={content}
                title={title}
                key={id}
              />
            ))}
          </Slider>
        </div>
      </div>

      <Form toggleForm={toggleForm} formPop={formPop} />
    </div>
  );
};

export default Hero;
