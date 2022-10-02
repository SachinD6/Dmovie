import styled from "styled-components";

export const SearchCardContent = styled.div`
  position: absolute;
  bottom: 0px;
  background: #192133;
  transition: all 0.25s ease-in;
  transition-delay: 0.25s;
  opacity: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 0 0.5rem;
`;

export const CardContainer = styled.div`
  position: relative;
  height: auto;
  width: 350px;
  transition: all 0.25s ease-in;
  transition-delay: 0.2s;
  margin-bottom: 3rem;

  img {
    border-radius: 5px;
  }
  &:hover {
    ${SearchCardContent} {
      opacity: 1;
    }
    transform: scale(1.3);
  }
`;

export const MovieTitle = styled.h2`
  font-weight: 500;
  font-size: 0.8rem;
  color: #fff;
  margin-bottom: 0;
`;

export const MovieDescription = styled.p`
  font-size: 0.7rem;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 170px;
  line-clamp: 2;
  box-orient: vertical;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
