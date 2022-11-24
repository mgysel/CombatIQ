import React from "react";
import { 
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
        <Image 
          boxSize='200px'
          src={props.src} 
          alt='Dan Abramov' 
        />
        <Stack spacing={1} pl='6px'>
          <Text fontSize='2xl'>{props.name}</Text>
          <Text fontSize='l'>{props.ethnicity}, {props.sex}</Text>
          <Text fontSize='l'>Age: {props.age}</Text>
          <Text fontSize='l'>{props.height} cm, {props.weight} lb (%muscle, %fat, %water)</Text>
          <Text fontSize='l'>Hand: {props.hand}</Text>
          <Text fontSize='l'>Class: {props.class}</Text>
          <Text fontSize='l'>Club: {props.club}</Text>
        </Stack>
      </Stack>
  </VStack>
  );
};

export default FighterCard;
