import { motion } from "framer-motion";
import Message from "./Message";
import { useEffect, useRef } from "react";
const Form = ({ formPop, toggleForm, setFormPop }) => {
  let formRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!formRef.current.contains(e.target)) {
        setFormPop(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setFormPop]);

  return (
    <>
      {formPop && (
        <div className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto bg-dark/70 ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 rounded-2xl backdrop-blur-md "
              ref={formRef}
            >
              <div className="p-6">
                <h1 className="text-center text-2xl font-semibold mb-4">
                  Send a Message
                </h1>
                <Message toggleForm={toggleForm} />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
