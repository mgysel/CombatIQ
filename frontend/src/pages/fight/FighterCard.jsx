import React from "react";
import { 
  AspectRatio,
  Box, 
  Header, 
  HStack,
  Image, 
  LinkBox,
  Text, 
  VStack,
  Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const FighterCard = (props) => {
  return (
    <VStack>
      <Stack direction='row'>
        <AspectRatio width='210px' height='210px'>
          <Image 
            src={props.src} alt={props.name}
            objectFit='cover'
          />
        </AspectRatio>
        <Stack spacing={1} pl='6px'>
          <VStack spacing={1.8} align='left'>
            <Text fontSize='3xl'>{props.name}</Text>
            <Text fontSize='xl'>Gender: {props.gender},  Age: {props.age}</Text>
            <Text fontSize='xl'>{props.height} cm, {props.weight} lb</Text>
            <Text fontSize='xl'>Hand: {props.hand}</Text>
            <Text fontSize='xl'>Class: {props.class}</Text>
            <Text fontSize='xl'>Club: {props.club}</Text>
          </VStack>
        </Stack>
      </Stack>
  </VStack>
  );
};

export default FighterCard;
