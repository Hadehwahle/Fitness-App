import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

import Contact from "./components/Contact/Contact";
import Highlights from "./components/Hero/Highlights";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const App = () => {
  const [formPop, setFormPop] = useState(false);

  const toggleForm = () => {
    setFormPop((prev) => !prev);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <div className=" dark:bg-black bg-white dark:text-white text-black">
      <Navbar />
      <Hero formPop={formPop} toggleForm={toggleForm} />
      <Highlights />
      <About />
      <Contact toggleForm={toggleForm} />
    </div>
  );
};

export default App;
