

export const contentVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 4,
    },
  },
};

export const stayTunedVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 1,
      ease: "easeIn",
      duration: 1,
    },
  },

};

export const uspBoxVariant = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 1,
      ease: "easeIn",
      duration: 1,
    },
  },
};

export const uspVariant = {
  hidden: {
    opacity: 0.4,
  },
  visible: {
    opacity: [0.6, 1, 0],
  },
};

export const quotesVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0, 1],
    transition: {
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

export const sloganVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0, 1, 0],
    transition: {
      ease: "easeIn",
      duration: 2,
    },
  },
};

