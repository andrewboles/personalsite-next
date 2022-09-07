import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const boxVariants = {
  hidden: { scale: 0.97, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const RevealAnimatedDiv = ({children,...props}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    controls.start("hidden");
  }, [controls]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return <motion.div ref={ref} variants={boxVariants} animate={controls} exit="hidden" initial="hidden" {...props}>{children}</motion.div>

};

export default RevealAnimatedDiv