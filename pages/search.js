import React from "react";
import styled from "styled-components";
import SearchCard from "../components/Cards/SearchCard/search_card.js";
import { useRouter } from "next/router";

const Title = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  color: #fff;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  margin: 3rem 4vw;
`;

const Search = ({ searchResults }) => {
  const router = useRouter();
  return (
    <>
      {" "}
      <Title>Showing results for #Search_Query</Title>
      <GridContainer>
        {searchResults.results.map((searchResult) => {
          return (
            <>
              <SearchCard
                imageUrl={searchResult.poster_path}
                title={searchResult.original_title}
                description={searchResult.overview}
              />
            </>
          );
        })}
      </GridContainer>
    </>
  );
};

export default Search;

export async function getStaticProps(context) {
  //   const { searchQuery } = context.query;
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=social`;
  const data = await fetch(API_URL);
  const searchResults = await data.json();
  console.log(searchResults);
  return {
    props: { searchResults },
  };
}
