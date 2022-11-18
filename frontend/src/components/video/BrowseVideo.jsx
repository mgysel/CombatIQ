import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  VStack,
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
import UploadVideoForm from "../forms/UploadVideoForm.jsx";

const BrowseVideo = () => {

  // For radio
  const [tabIndex, setTabIndex] = useState(0)
  
  return (
    <Flex w="100%" maxW="1366px" p="1rem" direction="column">
      <Tabs variant='enclosed' pl='10vw' pr='10vw' onChange={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Browse Past Videos</Tab>
          <Tab>Upload a Video</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Center>
              <Grid templateColumns='repeat(3, 1fr)' gap={9} pt='25px'>
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
              </Grid>
            </Center>
          </TabPanel>
          <TabPanel>
            <UploadVideoForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
      
    </Flex>
  );
};

export default BrowseVideo;
