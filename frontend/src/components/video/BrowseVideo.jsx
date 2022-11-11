import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  VStack,
  Divider,
} from "@chakra-ui/react";
// import {
//   useDisclosure,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   Box
// } from "@chakra-ui/core";
import VideoCard from '../../components/video/VideoCard.jsx'
import VideoInput from '../../components/video/VideoInput.jsx'

const BrowseVideo = () => {
  
  return (
    <Flex w="100%" maxW="1366px" p="1rem" direction="column">
      <VideoInput width={400} height={300} />

      <Heading align="center" my="1rem" pb='25px'>
        Browse Past Videos
      </Heading>
      <Center>
        <Grid templateColumns='repeat(3, 1fr)' gap={9}>
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </Grid>
      </Center>
      
    </Flex>
  );
};

export default BrowseVideo;
