import { animate, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function ScrollEffect({ children }) {
  const divRef = useRef();
  const inView = useInView(divRef, {margin: "-100px 0px 0px 0px",once:true });
  const manageScroll = useAnimation();

  useEffect(() => {
    if (inView) {
      manageScroll.start("after");
    }
    else{
        manageScroll.start("start")
    }
  }, [inView, manageScroll]);

  return (
    <motion.div
      variants={{
        start: { opacity: 0, y: 100 },
        after: { opacity: 1, y: 0 ,repeatCount:Infinity},
      }}
      initial="start"
      animate={manageScroll}
     
      
      transition={{ delay: 0.1, duration: 1 }}
      ref={divRef}
    >
      {children}
    </motion.div>
  );
}
