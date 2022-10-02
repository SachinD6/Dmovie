import Image from "next/image";
import React from "react";
import {
  CardContainer,
  MovieDescription,
  MovieTags,
  MovieTitle,
  MovieCardContent,
  GridContainer,
} from "./styles";
const IMAGE_BASE_PATH = "http://image.tmdb.org/t/p/w500";

const MovieCard = ({ title, imageUrl, genres, relaseDate, description }) => {
  return (
    <>
      <CardContainer>
        <Image
          src={IMAGE_BASE_PATH + imageUrl}
          alt="card_image"
          width={180}
          height={230}
          objectFit="cover"
        />
        <MovieCardContent>
          <MovieTitle>{title}</MovieTitle>
          <MovieTags>
            {genres} {relaseDate}
          </MovieTags>
          <MovieDescription>{description}</MovieDescription>
        </MovieCardContent>
      </CardContainer>
    </>
  );
};

export default MovieCard;
