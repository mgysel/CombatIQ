import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { CheckCircleIcon, WarningTwoIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  HStack,
  Text,
} from "@chakra-ui/react";
import Iframe from 'react-iframe-click';
import UploadVideoModal from './fight/UploadVideoModal.jsx';
import ChooseFightMenu from './fight/ChooseFightMenu.jsx';
import Stamina from './training/Stamina.jsx';
import Analysis from './training/Analysis.jsx';
import TrainingStatBox from './training/TrainingStatBox.jsx';

const Training = () => {

  // Data 
  const summary = {
    'time': '2',
    'stamina': '55',
    'strikes': '45',
    'sigstrikes': '22',
    'jabs': '12',
    'hooks': '8',
    'uppercuts': '7',
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
        <ChooseFightMenu button_text={'Choose Training Session'} />
        <UploadVideoModal button_text={'Upload Training Session'} />
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
        <Text fontSize='2xl'>Summary</Text>
        <TrainingStatBox data={summary} />
      </Box>

      <Box
        mt='20px' ml='10vw' mr='10vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px'>Analysis</Text>
        <Analysis />
      </Box>

      <Box
        mt='20px' mb='40px' ml='10vw' mr='10vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px'>Stamina</Text>
        <Stamina />
      </Box>
    </>
  );
};

export default Training;
