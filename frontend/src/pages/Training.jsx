import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'
import Iframe from 'react-iframe-click';
import UploadVideoModal from './fight/UploadVideoModal.jsx';
import ChooseFightMenu from './fight/ChooseFightMenu.jsx';
import Stamina from './training/Stamina.jsx';
import Analysis from './training/Analysis.jsx';
import TrainingStatBox from './training/TrainingStatBox.jsx';
import "cloudinary-video-player/dist/cld-video-player.light.min";
import "cloudinary-video-player/dist/cld-video-player.light.min.css";
import API from "../helpers/api";
import { StoreContext } from "../helpers/context";
import _ from 'lodash';

const Training = () => {
  const [thisTraining, setThisTraining] = React.useState(0)
  const [thisVideo, setThisVideo] = React.useState('')
  const [thisTitle, setThisTitle] = React.useState('')

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

  const handleMenuClick = (i) => {
    console.log("IIIII: ", i)
    console.log(context.trainingData[0])
    setThisTraining(i)
    setThisTitle(context.trainingData[0][thisTraining].title)
    setThisVideo(context.trainingData[0][thisTraining].video)
  }

  const context = useContext(StoreContext);

  useEffect(() => {
    if (_.isEqual(context.trainingData[0], [])) {
      API.getPath("training/get")
      .then((json) => {
        console.log("TRAINING DATA: ", json.data)
        context.trainingData[1](json.data);
        context.trainingData[0] = json.data;
        console.log("Training Data: ", context.trainingData[0])
        console.log("This training: ", context.trainingData[0][thisTraining])
        setThisTraining(context.trainingData[0].length - 1)
        setThisTitle(context.trainingData[0][thisTraining].title)
        setThisVideo(context.trainingData[0][thisTraining].video)
      })
      .catch((err) => {
        console.warn(`Error: ${err}`);
      });
    } else {
      console.log("Training data is not []")
      console.log("Training Data: ", context.trainingData[0])
      setThisTraining(context.trainingData[0].length - 1)
      setThisTitle(context.trainingData[0][thisTraining].title)
      setThisVideo(context.trainingData[0][thisTraining].video)
    }
  }, []);

  return (
    <>
      <HStack pt='20px' pl='11vw'>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Choose Training Session
          </MenuButton>
          <MenuList>
            {context.trainingData[0].map((value, i) => {
              console.log("Training value: ", value)
              return (
                <MenuItem id={i} onClick={() => {handleMenuClick(i)}}>{value.title} ({value.date})</MenuItem>
              )
            })}
          </MenuList>
        </Menu>
        <UploadVideoModal button_text={'Upload Training Session'} />
      </HStack>
      <Box
        mt='20px' ml='10vw' mr='10vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
      <Text fontSize='2xl'>{thisTitle}</Text>
        <Center pt='20px' pb='20px'>
          <iframe
            title='unique'
            src={'https://player.cloudinary.com/embed/?public_id=' + thisVideo + '&cloud_name=combatiq&player[fluid]=true&player[controls]=true&source[sourceTypes][0]=mp4'}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowfullscreen
            frameborder="0"
            allowFullScreen
            onClick={handleClick}
            onInferredClick={handleClick}
            width={isPlaying? aspectRatioChange.maxW : aspectRatioInit.maxW}
            height={isPlaying? aspectRatioChange.maxH : aspectRatioInit.maxH}
          ></iframe>
        </Center>
      </Box>
      <Box
        mt='20px' ml='10vw' mr='10vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px'>Summary</Text>
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
