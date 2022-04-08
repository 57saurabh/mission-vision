import React from "react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Cards = (Props) => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    title: "Modern home in city center in the heart of historic Los Angeles",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dicta ipsa! Tenetur expedita ullam, deleniti animi laboriosam, fugit recusandae possimus praesentium esse aut sequi id eaque. Voluptatum consectetur est eligendi hic consequuntur?",
    
  };
  return (
    <Box bg="tomato" w="250px" p={4} color="white" borderRadius="5px">
      <Image
        m="5%"
        borderRadius="full"
        boxSize="150px"
        src={property.imageUrl}
        alt="Dan Abramov"
      />
      <Box border="1px" borderRadius="5px">
        <Box
          mt="1"
          fontWeight="bold"
          as="h2"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>
        <Box>
            {property.desc}
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
