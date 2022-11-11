import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

const VideoCard = () => {

  let videoTitle = 'Video Title'
  let videoDate = 'Date'
  let videoDescription = 'This is the video description'
  let videoLength = '1:45'
  let videoSrc = "https://www.youtube.com/embed/QhBnZ6NPOY0"
  
  return (
    <VStack>
      <AspectRatio minW='260px' maxW='560px' ratio={1}>
        <iframe
          title='naruto'
          src={videoSrc}
          allowFullScreen
        />
      </AspectRatio>
      <Heading fontSize='2xl'>{videoTitle}</Heading>
      <HStack>
        <Text fontSize='1xl'>{videoDate}</Text>
        <Text fontSize='1xl'>{videoLength}</Text>
      </HStack>
      
    </VStack>
  );
};

export default VideoCard;
