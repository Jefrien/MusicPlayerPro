import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AnimationLayout = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 0, transitionDuration: 0.1 }}      
      className="h-screen"
    >
      {children}
    </motion.div>
  );
};
