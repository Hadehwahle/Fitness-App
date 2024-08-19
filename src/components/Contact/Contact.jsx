const Contact = ({ toggleForm }) => {
  return (
    <div id="contact" className="overflow-hidden bg-slate-100 dark:bg-black">
      <div className="container dark:bg-black  py-14">
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="col-span-2">
            <h1 className="text-1xl sm:text-2xl md:text-3xl text-center md:text-left font-bold text-black/80 dark:text-white lg:w-[77%] lg:mx-auto">
              <span className="text-primary ">
                Reach Out and Let us Journey Together.
              </span>
              &nbsp; We are Here to Support Your Every Step.
            </h1>
          </div>
          <div className="text-center grid place-items-center ">
            <button onClick={toggleForm} className="primary-btn">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
