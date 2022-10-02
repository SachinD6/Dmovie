//Set themes and mediaQueries here

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const { mobileS, mobileM, mobileL, tablet, laptop, laptopL, desktop } = sizes;

export const devices = {
  mobileS: `(max-width: ${mobileS})`,
  mobileM: `(max-width: ${mobileM})`,
  mobileL: `(max-width: ${mobileL})`,
  tablet: `(max-width: ${tablet})`,
  laptop: `(max-width: ${laptop})`,
  laptopL: `(max-width: ${laptopL})`,
  desktop: `(max-width: ${desktop})`,
};
