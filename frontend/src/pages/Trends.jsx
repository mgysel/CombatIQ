import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Center,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import MultiLine from "../components/MultiLine";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  MenuIcon,
  MenuCommand
} from '@chakra-ui/react'
import { Button, Image } from "@chakra-ui/react";

const Trends = () => {
  
  return (
    
    <VStack>
      <Heading align="center" my="1rem">
        Improvement Over Time
      </Heading>
      <Menu>
        <MenuButton as={Button} rightIcon='▾'>
          Select a metric
        </MenuButton>
        <MenuList>
          <MenuItem minH='48px'>
            <Image
              boxSize='2rem'
              borderRadius='full'
              src='https://placekitten.com/100/100'
              alt='Strikes'
              mr='12px'
            />
            <span>Strikes</span>
          </MenuItem>
          <MenuItem minH='40px'>
            <Image
              boxSize='2rem'
              borderRadius='full'
              src='https://placekitten.com/120/120'
              alt='Significant Strikes'
              mr='12px'
            />
            <span>Significant Strikes</span>
          </MenuItem>
        </MenuList>
      </Menu>
      <MultiLine />
    </VStack>

  );
};

export default Trends;
