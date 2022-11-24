import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  useDisclosure,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import Iframe from 'react-iframe-click';
import HumanBody from "../components/humanbody/HumanBody";
import RadioCard from "../components/radio/RadioCard";
import RingProgress from "../components/visualisations/RingProgress";
import AntBidirectional from "../components/visualisations/AntBidirectional";
import Summary from "./fight/Summary.jsx"
import FighterCard from './fight/FighterCard.jsx'
import UploadVideoModal from './fight/UploadVideoModal.jsx'
import ChooseFightMenu from './fight/ChooseFightMenu.jsx'
import AccuracyVis from './fight/AccuracyVis.jsx'
import Heatmap from './fight/Heatmap.jsx'

const Fight = () => {

  

  // Handle data 
  const fighter1 = {
    'image': 'https://img.bleacherreport.net/img/images/photos/002/098/618/AP11111909790_crop_exact.jpg?w=1200&h=1200&q=75',
    'name': 'Wanderlei Silva',
    'ethnicity': 'Brazilian American',
    'age': '46 (3 July 1976)',
    'sex': 'Male',
    'height': '180',
    'weight': '220',
    'hand': 'right hand',
    'class': 'middle weight',
    'club': 'Chute Boxe Academy'
  }
  const fighter2 = {
    'image': 'https://img.bleacherreport.net/img/images/photos/002/098/618/AP11111909790_crop_exact.jpg?w=1200&h=1200&q=75',
    'name': 'Wanderlei Silva',
    'ethnicity': 'Brazilian American',
    'age': '46 (3 July 1976)',
    'sex': 'Male',
    'height': '180',
    'weight': '220',
    'hand': 'right hand',
    'class': 'middle weight',
    'club': 'Chute Boxe Academy'
  }

  let videoTitle = 'Video Title'
  let videoSrc = "https://www.youtube.com/embed/sLTvQnjEkRU"

  let [isPlaying, setIsPlaying] = React.useState(false);
  let aspectRatioInit = {
    'maxW': '1150px',
    'maxH': '150px'
  }
  let aspectRatioChange = {
    'maxW': '700px',
    'maxH': '450px'
  }

  const handleClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      console.log("CHANGING isPLAYING TO TRUE")
    } else {
      setIsPlaying(false);
      console.log("CHANGING isPLAYING TO FALSE")
    }
  }

  // Comparison graph commented out
  //   <Box 
  //   mt='20px' ml='10vw' mr='10vw' 
  //   p='20px'
  //   pt='10px'
  //   borderWidth='1px' borderRadius='lg' overflow='hidden' 
  // >
  //   <Text fontSize='2xl' pb='10px'>Comparison</Text>
  //   <Summary 
  //     fighter1={fighter1}
  //     fighter2={fighter2}
  //   />
  // </Box>

  return (
    <>
      <HStack pt='20px' pl='11vw'>
        <ChooseFightMenu button_text={'Choose Fight'} />
        <UploadVideoModal button_text={'Upload Fight'} />
      </HStack>
      <Center pt='20px' pb='20px'>
        <Iframe
          title={videoTitle}
          src={videoSrc}
          allowFullScreen
          onInferredClick={handleClick}
          width={isPlaying? aspectRatioChange.maxW : aspectRatioInit.maxW}
          height={isPlaying? aspectRatioChange.maxH : aspectRatioInit.maxH}
        />
      </Center>
      <Box
        mt='0px' ml='10vw' mr='10vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px'>Bio</Text>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          <FighterCard 
            src={fighter1.image} 
            name={fighter1.name} 
            ethnicity={fighter1.ethnicity}
            sex={fighter1.sex} 
            age={fighter1.age} 
            height={fighter1.height} 
            weight={fighter1.weight}
            hand={fighter1.hand}
            class={fighter1.class}
            club={fighter1.club}
          />
          <FighterCard 
            src={fighter2.image} 
            name={fighter2.name} 
            ethnicity={fighter2.ethnicity}
            sex={fighter2.sex} 
            age={fighter2.age} 
            height={fighter2.height} 
            weight={fighter2.weight}
            hand={fighter2.hand}
            class={fighter2.class}
            club={fighter2.club}
          />
        </Grid>
      </Box>
      <Box
        mt='20px' ml='10vw' mr='10vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px'>Comparison</Text>
        <Grid templateColumns='repeat(2, 1fr)' gap={200}>
          <AccuracyVis
            fighter1={fighter1}
            fighter2={fighter2}
          />
        </Grid>
      </Box>
      <Box
        mt='20px' ml='10vw' mr='10vw' mb='40px'
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px'>Positioning</Text>
        <Box pl='50px' pr='20px'>
          <Grid templateColumns='repeat(2, 1fr)' gap={0}>
            <VStack>
              <Text fontSize='1xl' pr='10px' pb='10px'>{fighter1.name}</Text>
              <Heatmap />
            </VStack>
            <VStack>
              <Text fontSize='1xl' pr='10px' pb='10px'>{fighter2.name}</Text>
              <Heatmap />
            </VStack>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Fight;
