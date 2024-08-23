import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Store = ({ download, handleCloseButton, setDownload }) => {
  let downloadRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!downloadRef.current.contains(e.target)) {
        setDownload(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setDownload]);

  return (
    <>
      {download && (
        <div className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto bg-dark/70">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 rounded-2xl backdrop-blur-md "
            >
              <div ref={downloadRef} className="flex flex-col items-center p-2">
                <h1 className="text-center text-2xl font-semibold mb-4">
                  Comming Soon!
                </h1>
                <button onClick={handleCloseButton} className="primary-btn">
                  OK
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Store;
