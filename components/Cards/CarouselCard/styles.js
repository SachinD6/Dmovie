import styled from "styled-components";

export const CarouselMovieCardContainer = styled.div`
  position: relative;
  display: block;
  width: 800px;
  height: 350px;
  margin: 100px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  display: flex;
  &:hover {
    transform: scale(1.02);
    transition: all 0.4s;
    box-shadow: 0px 0px 120px -55px rgba(255, 51, 0, 0.5);
  }

  box-shadow: 0px 0px 150px -45px rgba(255, 51, 0, 0.5);
`;

export const InfoSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
`;

export const MovieHeader = styled.div`
  position: relative;
  padding: 25px;
  height: 40%;
`;

export const MovieDescription = styled.div`
  padding: 25px;
  height: 50%;
  p {
    color: #cfd6e1;
  }
`;

export const ImageOverlayEffect = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
`;
