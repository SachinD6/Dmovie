import React from "react";
import { CardContainer, Card } from "./styles.js";
import Image from "next/image";

//TODO: Move it to constants folder or data folder
const data = [
  {
    imageUrl: "/marvel.webp",
    imageAltText: "marvel_banner_image",
  },
  {
    imageUrl: "/star_wars.webp",
    imageAltText: "star_wars_banner_image",
  },
  {
    imageUrl: "/pixar.webp",
    imageAltText: "pixar_banner_image",
  },
  {
    imageUrl: "/disney.webp",
    imageAltText: "disney_banner_image",
  },
  {
    imageUrl: "/national_geo.webp",
    imageAltText: "national_geo_banner_image",
  },
];

const ChannelCard = () => {
  return (
    <>
      <CardContainer>
        {data.map((image) => {
          return (
            <>
              <Card>
                <Image
                  src={`${image.imageUrl}`}
                  alt={`${image.imageAltText}`}
                  width={260}
                  height={150}
                  quality={100}
                />
              </Card>
            </>
          );
        })}
      </CardContainer>
    </>
  );
};

export default ChannelCard;
