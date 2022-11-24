import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {

  let navPadding = "10px"

  return (
    <Flex width="100%" h="3.5rem" bg="gray.700" color="white">
      <Flex
        w="100%"
        maxW="1366px"
        h="100%"
        alignItems="center"
        px="1rem"
      >
        <Heading
          as={RouterLink}
          to={"/"}
          minW="max-content"
          padding={navPadding}
        >
          <Image src='images/combatiq_logo.svg' />
        </Heading>
        <Heading
          as={RouterLink}
          to={"/fight"}
          minW="max-content"
          padding={navPadding}
        >
          Fight
        </Heading>
        <Heading
          as={RouterLink}
          to={"/training"}
          minW="max-content"
          padding={navPadding}
        >
          Training
        </Heading>
        <Heading
          as={RouterLink}
          to={"/trends"}
          minW="max-content"
          padding={navPadding}
        >
          Trends
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Navbar;
