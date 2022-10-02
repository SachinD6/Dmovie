import React from "react";
import { FooterContainer, StyledP } from "./style";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <StyledP>
          Made by{" "}
          <a href="https://github.com/sachind6">Sachin</a>
        </StyledP>

        <StyledP>
          Source Code on GITHUB <VscGithub size={20} />{" "}
        </StyledP>
      </FooterContainer>
    </>
  );
};

export default Footer;
