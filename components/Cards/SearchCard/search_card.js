import Image from "next/image";
import React from "react";
import {
  CardContainer,
  MovieDescription,
  MovieTitle,
  SearchCardContent,
} from "./styles";
const IMAGE_BASE_PATH = "http://image.tmdb.org/t/p/w500";

const SearchCard = ({ title, imageUrl, description }) => {
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
        <SearchCardContent>
          <MovieTitle>{title}</MovieTitle>
          <MovieDescription>{description}</MovieDescription>
        </SearchCardContent>
      </CardContainer>
    </>
  );
};

export default SearchCard;
