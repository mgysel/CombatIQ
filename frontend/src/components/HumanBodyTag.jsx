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

const HumanBodyTag = (props) => {
  return (
    <Tag id='head-label' class='head-label' size='lg' colorScheme='red' padding='10px' position='absolute' zIndex={10000}
      marginLeft={props.marginLeft}
      marginTop={props.marginTop}
    >
        <VStack>
          <TagLabel fontWeight='bold'>{props.title}</TagLabel>
          <TagLabel>{props.hits}/{props.attempts}</TagLabel>
        </VStack>
    </Tag>
  );
};

export default HumanBodyTag;
