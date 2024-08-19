const Content = ({ heading, title, content }) => {
  return (
    <div className="container min-h-[80dvh] flex items-center">
      <div className="w-full md:w-[1100px] mx-auto text-center space-y-5">
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
          className=" text-3xl md:text-6xl font-bold"
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
        <button data-aos-delay="900" data-aos="fade-up" className="primary-btn">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Content;
