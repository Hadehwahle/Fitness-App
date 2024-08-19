import Slider from "react-slick";
import blogSnip from "./BlogContent";
import { Link } from "react-router-dom";

const Highlights = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="dark:bg-dark py-6 overflow-hidden">
      <div className=" container w-full items-center min-h-[70dvh] ">
        <div className="">
          <h1
            data-aos="fade-down"
            data-aos-delay="300"
            className="text-primary text-center text-[1.5rem] sm:text-3xl md:text-4xl font-bold py-4"
          >
            We Run Together
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-1xl sm:text-[1.3rem] text-center lg:text-left pb-8 w-[95%] mx-auto"
          >
            In the rhythm of our footsteps, we find the power of companionship.
            Each stride we take together resonates with a shared heartbeat,
            creating a soothing melody that transcends words. As we match our
            paces and breathe in sync, we forge connections that strengthen our
            resolve and uplift our spirits.
          </p>
        </div>

        <div className="">
          <Slider {...settings}>
            {blogSnip.map(({ img, headline, link, id, trans, time }) => (
              <div key={id}>
                <div
                  className="flex flex-col items-center gap-4 hover:shadow-xl rounded-2xl cursor-pointer p-4 text-center dark:bg-dark  dark:hover:bg-black  duration-200 mx-4 overflow-x-hidden"
                  data-aos={trans}
                  data-aos-delay={time}
                >
                  <div>
                    <img src={img} alt="" className="rounded-t-lg" />
                  </div>
                  <div>
                    <p className="text-[0.9rem] py-2 font-semibold">
                      {headline}
                    </p>
                    <button className="primary-btn">
                      <Link to={link} target="_blank">
                        Read More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
