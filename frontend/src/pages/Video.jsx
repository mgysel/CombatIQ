import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import VideoInput from '../components/VideoInput.jsx'

const Video = () => {
  
  return (
    <VStack>
      <Heading align="center" my="1rem">
        Video
      </Heading>
      <Flex>
        <VideoInput width={400} height={300} />
      </Flex>
    </VStack>
  );
};

export default Video;