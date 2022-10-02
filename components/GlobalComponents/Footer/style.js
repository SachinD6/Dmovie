import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 10vh;
  background: #192133;
  padding: 1rem 0;
  margin: 0.3rem auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledP = styled.p`
  color: #fff;
  margin-right: 2rem;

  span {
    color: red;
  }

  a {
    color: #1f80e0;
    &:hover {
      text-decoration: underline;
    }
  }
`;
