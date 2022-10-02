import styled from "styled-components";

export const CardContainer = styled.div`
  /* background-color: #192133; */
  border-radius: 5px;
  transition: transform 0.25 ease-in;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  gap: 15px;
  margin: 3rem 4vw;

  img {
    border-radius: 5px;
  }
`;

export const Card = styled.div`
  transition: all 0.25s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
