import React from "react";
import { 
  Box, 
  Header, 
  Image, 
  Text, 
  LinkBox, 
  LinkOverlay,
  Tag,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {getColor} from '../../helpers/accuracyColor'

const HumanBodyTag = (props) => {
  return (
    <Tag id='head-label' class='head-label' size='lg' background='#E2E8F0' padding='10px' position='absolute' zIndex={10000}
      marginLeft={props.marginLeft}
      marginTop={props.marginTop}
      width={props.width}
    >
        <VStack>
          <TagLabel fontWeight='bold'>{props.title}</TagLabel>
          <TagLabel>{props.hits}/{props.attempts}</TagLabel>
        </VStack>
    </Tag>
  );
};

export default HumanBodyTag;
