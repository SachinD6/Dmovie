import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { CarouselSlides, Wrap, CarouselContainer } from "./styles.js";
import CarouselCard from "../Cards/CarouselCard/carousel_card.js";
import Image from "next/image";

//Carousel Settings ...
const settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  return (
    <>
    <CarouselContainer>
        <CarouselSlides {...settings}>
                <Wrap>
                    <a>
                        {/* <Image src="/star_wars_poster.webp" alt="poster" width={700} height={500}/> */}
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="demo.webp" alt=""/>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-badag.jpg" alt=""/>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-scales.jpg" alt=""/>
                    </a>
                </Wrap>
            </CarouselSlides>
            </CarouselContainer>
    </>
  );
};

export default Carousel;
