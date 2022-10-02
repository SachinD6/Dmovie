import React from "react";
import Image from "next/image";

import {
  CarouselMovieCardContainer,
  InfoSection,
  MovieHeader,
  MovieDescription,
  ImageOverlayEffect,
} from "./styles.js";
const CarouselCard = () => {
  return (
    <>
      <CarouselMovieCardContainer>
        <InfoSection>
          <MovieHeader>
            <Image src="/demo.webp" alt="poster" layout="fill" />

            <p class="type">Action, Crime, Fantasy</p>
          </MovieHeader>
          <MovieDescription>
            Set in a world where fantasy creatures live side by side with
            humans. A human cop is forced to work with an Orc to find a weapon
            everyone is prepared to kill for.
          </MovieDescription>
        </InfoSection>{" "}
        <ImageOverlayEffect></ImageOverlayEffect>
      </CarouselMovieCardContainer>
    </>
  );
};

export default CarouselCard;
