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
          boxSize='150px'
          src={props.src} 
          alt='Dan Abramov' 
        />
        <Stack spacing={1} pl='6px'>
          <Text fontSize='2xl'>{props.name}</Text>
          <Text fontSize='l'>{props.ethnicity}, {props.sex}</Text>
          <Text fontSize='l'>{props.age}</Text>
          <Text fontSize='l'>{props.height} cm, {props.weight} lb (%muscle, %fat, %water)</Text>
          <Text fontSize='l'>Team: {props.team}</Text>
        </Stack>
      </Stack>
  </VStack>
  );
};

export default FighterCard;
