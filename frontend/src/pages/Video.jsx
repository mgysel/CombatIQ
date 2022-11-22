import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AspectRatio,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import Iframe from 'react-iframe-click';
import HumanBody from "../components/humanbody/HumanBody";
import RadioCard from "../components/radio/RadioCard";
import RingProgress from "../components/visualisations/RingProgress";
import AntBidirectional from "../components/visualisations/AntBidirectional";
import Summary from "./fight/Summary.jsx"

const Video = () => {

  let videoTitle = 'Video Title'
  let videoDate = 'Date'
  let videoDescription = 'This is the video description'
  let videoLength = '1:45'
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

  // For radio
  const [tabIndex, setTabIndex] = useState(0)

  const options = ['Overall', 'Cross', 'Jab', 'Lead Hook', 'Rear Hook', 'Uppercut']
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Overall',
    onChange: console.log,
  })
  const group = getRootProps()

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
      <Tabs variant='enclosed' pl='10vw' pr='10vw' onChange={(index) => setTabIndex(index)} >
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Fighter 1</Tab>
          <Tab>Fighter 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Summary />
          </TabPanel>
          <TabPanel>
            <VStack align='left'>
              <HStack>
                <Text fontSize='2xl' fontWeight='bold'>Choose Attack</Text>
                <HStack {...group}>
                  {options.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                      <RadioCard key={value} {...radio}>
                        {value}
                      </RadioCard>
                    )
                  })}
                </HStack>
              </HStack>
              <Center pt='20px'>
                <VStack pr='10vw'>
                  <HStack pb='30px'>
                    <Text fontSize='2xl' pr='10px'>Accuracy</Text>
                    <RingProgress />
                  </HStack>
                  <HumanBody />
                </VStack>
                <VStack pl='10vw'>
                  <HStack pb='30px'>
                    <Text fontSize='2xl' pr='10px'>Speed</Text>
                    <RingProgress />
                  </HStack>
                  <HumanBody />
                </VStack>
              </Center>
            </VStack>
          </TabPanel>
          <TabPanel>
            <p>Three</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Video;
