const Content = ({ heading, title, content }) => {
  return (
    <div className="container min-h-[100dvh] lg:min-h-[90dvh] flex items-center overflow-x-hidden">
      <div className="w-full md:w-[1100px] mx-auto text-center space-y-5">
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-primary text-1xl sm:text-[1.4rem] font-semibold"
        >
          {heading}.
        </p>
        <h1
          data-aos="zoom-out"
          data-aos-delay="400"
          className=" text-[1.5rem] sm:text-3xl md:text-4xl font-bold"
        >
          {title}
        </h1>
        <p
          data-aos="fade-down"
          data-aos-delay="500"
          className="text-1xl  sm:text-[1.3rem]"
        >
          {content}
        </p>
        <button data-aos-delay="600" data-aos="fade-up" className="primary-btn">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Content;
