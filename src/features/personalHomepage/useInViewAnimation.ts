import { useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

const useInViewAnimation = (amount: number) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: amount, once: false });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return { animation, ref };
};

export default useInViewAnimation;
