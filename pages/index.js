import Head from "next/head";
import MovieCard from "../components/Cards/MovieCard/movie_card.js";
import ChannelCard from "../components/Cards/ChannelCard/channel_card.js";
import styled from "styled-components";
import { useRouter } from "next/router.js";
// import Carousel from "../components/Carousel/carousel.js";

export default function Home({ movies }) {
  return (
    <>
      {/* <Carousel /> */}
      <ChannelCard />
      <GridContainer>
        {movies.results.map((movie) => {
          const { id, original_title, release_date, poster_path, overview } = movie;
          return (
            <>
              <MovieCard
                key={id}
                title={original_title}
                imageUrl={poster_path}
                relaseDate={release_date}
                description={overview}
              />
            </>
          );
        })}
      </GridContainer>
    </>
  );
}

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

export async function getStaticProps(context) {
  const response = await fetch(API_URL);
  const movies = await response.json();

  return {
    props: { movies },
  };
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  margin: 3rem 4vw;
`;
