import styled from "styled-components";
import Slider from "react-slick";

export const CarouselSlides = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -70px;
  }
  .slick-next {
    right: -70px;
  }
`;

export const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px - 10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 70vh;
    }
    &:hover {
      /* padding: 0; */
      /* border: 4px solid rgba(248, 248, 248, 0.89); */
      transition-duration: 200ms;
    }
  }
`;

export const CarouselContainer = styled.div` 
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
    &:after {
        background: url('images/home-background.png') center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;
