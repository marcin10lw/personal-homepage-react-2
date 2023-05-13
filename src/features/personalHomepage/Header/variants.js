export const headerVariants = {
  hidden: {
    opacity: 0,
    y: "-60",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

export const buttonVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.6,
    },
  },
};
