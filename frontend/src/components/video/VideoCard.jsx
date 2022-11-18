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
import './VideoCard.css'

const VideoCard = () => {

  let videoTitle = 'Video Title'
  let videoDate = 'Date'
  let videoDescription = 'This is the video description'
  let videoLength = '1:45'
  let videoSrc = "https://www.youtube.com/embed/sLTvQnjEkRU"
  
  return (
    <VStack pl='10px' pr='10px'>
      <div border-radius='10px' overflow='hidden' z-index='1'>
        <iframe class='video-card'
          title='naruto'
          src={videoSrc}
          allowFullScreen
          frameborder="0"
        />
      </div>
      <Heading fontSize='2xl'>{videoTitle}</Heading>
      <HStack>
        <Text fontSize='1xl'>{videoDate}</Text>
        <Text fontSize='1xl'>{videoLength}</Text>
      </HStack>
    </VStack>
  );
};

export default VideoCard;
