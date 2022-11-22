import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AspectRatio,
  Button,
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

const NewFight = () => {

  // Handle data 
  const fighter1 = {
    'image': 'https://img.bleacherreport.net/img/images/photos/002/098/618/AP11111909790_crop_exact.jpg?w=1200&h=1200&q=75',
    'name': 'Wanderlei Silva',
    'ethnicity': 'Brazilian American',
    'age': 'age (3 July 1976)',
    'sex': 'Male',
    'height': '180',
    'weight': '220',
    'team': 'Chute Boxe Academy'
  }
  const fighter2 = {
    'image': 'https://img.bleacherreport.net/img/images/photos/002/098/618/AP11111909790_crop_exact.jpg?w=1200&h=1200&q=75',
    'name': 'Wanderlei Silva',
    'ethnicity': 'Brazilian American',
    'age': 'age (3 July 1976)',
    'sex': 'Male',
    'height': '180',
    'weight': '220',
    'team': 'Chute Boxe Academy'
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

  return (
    <>
      <HStack pt='20px' pl='11vw'>
        <ChooseFightMenu />
        <UploadVideoModal />
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
      <Center 
        pt='20px' pb='20px'
        ml='10vw' mr='10vw' 
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <HStack>
          <Flex pr='70px'>
            <FighterCard 
              src={fighter1.image} 
              name={fighter1.name} 
              ethnicity={fighter1.ethnicity}
              sex={fighter1.sex} 
              age={fighter1.age} 
              height={fighter1.height} 
              weight={fighter1.weight}
              team={fighter1.team}
            />
          </Flex>
          <Flex pl='70px'>
            <FighterCard 
              src={fighter2.image} 
              name={fighter2.name} 
              ethnicity={fighter2.ethnicity}
              sex={fighter2.sex} 
              age={fighter2.age} 
              height={fighter2.height} 
              weight={fighter2.weight}
              team={fighter2.team}
            />
          </Flex>
        </HStack>
      </Center>
      <Flex 
        mt='20px' ml='10vw' mr='10vw' 
        pb='40px' pl='6.5vw'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <AccuracyVis
          fighter1={fighter1}
          fighter2={fighter2}
        />
      </Flex>
      <Center 
        mt='20px' mb='40px' ml='10vw' mr='10vw' 
        pt='10px' pb='20px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Summary 
          fighter1={fighter1}
          fighter2={fighter2}
        />
      </Center>
    </>
  );
};

export default NewFight;
