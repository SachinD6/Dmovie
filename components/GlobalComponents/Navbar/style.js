import styled from "styled-components";
import { devices } from "../../../styles/index.js";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  margin-left: 5vw;
  margin-right: 5vw;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  img {
    @media (max-width: 420px) {
      display: none;
    }
  }

  a {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const NavbarLink = styled.a`
  color: #fff;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBox = styled.input`
  border: 0.125em solid #737373;
  border-width: 0 0 2px;
  background-color: transparent;
  padding: 0.1875em 0.375em;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #f0f0f0;

  &:focus {
    border-color: #1f80e0;
    outline: 0;
  }
`;

export const Label = styled.label`
  color: #737373;
  /* float: left; */
  vertical-align: baseline;
  margin: 0.125em 0.125em 0 0;
`;
