import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {

  return (
    <Flex h="3.5rem" justifyContent="center" bg="gray.700" color="white">
      <Flex
        w="100%"
        maxW="1366px"
        h="100%"
        alignItems="center"
        px="1rem"
        justifyContent="space-between"
      >
        <Heading
          as={RouterLink}
          to={"/"}
          minW="max-content"
        >
          Home
        </Heading>
        <Heading
          as={RouterLink}
          to={"/scenario"}
          minW="max-content"
        >
          Scenario
        </Heading>
        <Heading
          as={RouterLink}
          to={"/video"}
          minW="max-content"
        >
          Video
        </Heading>
        <Heading
          as={RouterLink}
          to={"/comparison"}
          minW="max-content"
        >
          Comparison
        </Heading>
        <Heading
          as={RouterLink}
          to={"/fighters"}
          minW="max-content"
        >
          Fighters
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Navbar;
