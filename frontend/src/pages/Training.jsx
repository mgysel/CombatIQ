import React, { useContext, useEffect, useState } from "react";
import {
  AspectRatio,
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
  const [thisTraining, setThisTraining] = useState(0)
  const [thisVideo, setThisVideo] = useState('')
  const [thisTitle, setThisTitle] = useState('')
  const [isPlaying, setIsPlaying] = useState(0);

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

  let aspectRatioInit = {
    'maxW': '1150px',
    'maxH': '150px'
  }
  let aspectRatioChange = {
    'maxW': '700px',
    'maxH': '450px'
  }

  // TODO RETURN VIDEO ELEMENT
  const handleClick = () => {
    console.log("handle click")
    console.log(isPlaying)
    if (isPlaying !== 1) {
      setIsPlaying(1);
      console.log("CHANGING isPLAYING TO TRUE")
    } 
  }

  const handleMenuClick = (i) => {
    console.log("IIIII: ", i);
    console.log(context.trainingData[0]);
    setThisTraining(i);
    setThisTitle(context.trainingData[0][i].title);
    setThisVideo(context.trainingData[0][i].video);

    console.log("Handle menu click");
    console.log("CHANGING IS PLAYING TO FALSE");
    setIsPlaying(0);
    console.log(isPlaying);
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
        setThisTraining(0)
        setThisTitle(context.trainingData[0][thisTraining].title)
        setThisVideo(context.trainingData[0][thisTraining].video)
      })
      .catch((err) => {
        console.warn(`Error: ${err}`);
      });
    } else {
      if (context.trainingData[0].length > 0) {
        console.log("Training data is not []")
        console.log("Training Data: ", context.trainingData[0])
        setThisTraining(0)
        setThisTitle(context.trainingData[0][thisTraining].title)
        setThisVideo(context.trainingData[0][thisTraining].video)
      }
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
      <Text fontSize='2xl' pb='10px'>{thisTitle}</Text>
        <Center>
          <Iframe
            key={thisTraining + isPlaying}
            title='unique'
            src={'https://player.cloudinary.com/embed/?public_id=' + thisVideo + '&cloud_name=combatiq&player[fluid]=true&player[controls]=true&source[sourceTypes][0]=mp4'}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowfullscreen
            frameborder="0"
            allowFullScreen
            onClick={handleClick}
            onInferredClick={handleClick}
            width={isPlaying===1 ? aspectRatioChange.maxW : aspectRatioInit.maxW}
            height={isPlaying===1 ? aspectRatioChange.maxH : aspectRatioInit.maxH}
          ></Iframe>
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
