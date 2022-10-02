import { React, useState } from "react";
import {
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
  SearchBox,
  SearchContainer,
  Label,
} from "./style.js";

import { GiHamburgerMenu } from "react-icons/gi";
import { VscSearch } from "react-icons/vsc";

import Image from "next/image";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  const handleSearchChange = (event) => {
    event.preventDefault();
    const value = event.target.value;

    if (value.length > 1) {
      setSearchQuery(value);
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=7932c74f41527004c75488c4393fe50c`
      )
        .then((data) => data.json())
        .then((result) => console.log(result));
    }
  };
  return (
    <>
      <NavbarContainer>
        <NavbarLinkContainer>
          <GiHamburgerMenu color="#f0f0f0" size={20} />
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={55}
            quality={100}
          />
          <NavbarLink>Trending</NavbarLink>
          <NavbarLink>TV</NavbarLink>
          <NavbarLink>Movies</NavbarLink>
          <NavbarLink>Sports</NavbarLink>
        </NavbarLinkContainer>
        <SearchContainer>
          <VscSearch color="white" size={22} />
          <SearchBox
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </SearchContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
