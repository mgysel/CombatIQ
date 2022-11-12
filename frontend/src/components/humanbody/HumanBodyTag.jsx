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
  // <Tag id='head-label' class='head-label' size='lg' background='#E2E8F0' padding='10px' position='absolute' zIndex={10000}
    //   marginLeft={props.marginLeft}
    //   marginTop={props.marginTop}
    //   width={props.width}
    // >
    //     <VStack>
    //       <TagLabel fontWeight='bold'>{props.title}</TagLabel>
    //       <TagLabel>{props.hits}/{props.attempts}</TagLabel>
    //     </VStack>
    // </Tag>

  return (
    <Box id='head-label' class='head-label' size='lg' padding='10px' position='absolute' zIndex={10000}
      background='white'  
      borderWidth='1px'
      borderRadius='md'
      boxShadow='md'
      marginLeft={props.marginLeft}
      marginTop={props.marginTop}
      width={props.width}
    >
        <VStack>
          <Text fontSize='15px' fontWeight='bold'>{props.title}</Text>
          <Text fontSize='15px'>{props.hits}/{props.attempts}</Text>
        </VStack>
    </Box>
  );
};

export default HumanBodyTag;
