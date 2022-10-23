import React from "react";
import { Box, Header, Image, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const FighterCard = (props) => {
  return (
    <LinkBox
      m="0.5rem"
      _hover={{
        textDecoration: "underline",
      }}
    >
      <Box w={props.size}>
        <Header>
            {props.name}
        </Header>
        <Text>
            {props.age}
        </Text>
        <Text>
            {props.weight}
        </Text>
      </Box>
    </LinkBox>
  );
};

export default FighterCard;
