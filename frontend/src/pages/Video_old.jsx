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
import RingProgress from "../components/visualisations/RingProgress"

const Video = () => {

  let videoTitle = 'Video Title'
  let videoDate = 'Date'
  let videoDescription = 'This is the video description'
  let videoLength = '1:45'
  let videoSrc = "https://www.youtube.com/embed/sLTvQnjEkRU"

  let [isPlaying, setIsPlaying] = React.useState(false);
  let aspectRatioInit = {
    'maxW': '80vw',
    'maxH': '150px'
  }
  let aspectRatioChange = {
    'maxW': '650px',
    'maxH': '650px'
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

  const handlePlay = () => {
    console.log("HANDLE PLAYING")
  }

  // For radio
  const [tabIndex, setTabIndex] = useState(0)

  const options = ['Overall', 'Right Punch', 'Left Punch', 'Right Kick', 'Left Kick']
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Overall',
    onChange: console.log,
  })
  const group = getRootProps()

  return (
    <>
      <Center>
        <AspectRatio 
          maxWidth={isPlaying? aspectRatioChange.maxW : aspectRatioInit.maxW}
          maxHeight={isPlaying? aspectRatioChange.maxH : aspectRatioInit.maxH}
          mt='15px' mb='15px' flex="1 1 auto" 
        >
          <Iframe
            title={videoTitle}
            src={videoSrc}
            allowFullScreen
            onClick={handleClick}
            onPlay={handlePlay}
            onInferredClick={handleClick}
          />

        </AspectRatio>
      </Center>
      <Tabs variant='enclosed' pl='10vw' pr='10vw' onChange={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Fighter 1</Tab>
          <Tab>Fighter 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Stack direction='row'>
            <Image 
                boxSize='100px'
                src='https://img.bleacherreport.net/img/images/photos/002/098/618/AP11111909790_crop_exact.jpg?w=1200&h=1200&q=75' alt='Dan Abramov' />
              <Stack spacing={2}>
                <Text fontSize='2xl'>Wanderlei Silva</Text>
                <Text fontSize='l'>Brazilian American, Male</Text>
                <Text fontSize='l'>age (3 July 1976)</Text>
                <Text fontSize='l'>180 cm, 220 lb (%muscle, %fat, %water)</Text>
                <Text fontSize='l'>Team: Chute Boxe Academy</Text>
              </Stack>
            </Stack>
            <StatGroup pt='50px'>
              <Stat>
                <StatLabel>Number of Fight</StatLabel>
                <StatNumber>49</StatNumber>
                <StatHelpText>
                  <StatArrow type='increase' />
                  23.36%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Wins</StatLabel>
                <StatNumber>35</StatNumber>
                <StatHelpText>
                  <StatArrow type='decrease' />
                  19.05%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Losses</StatLabel>
                <StatNumber>14</StatNumber>
                <StatHelpText>
                  <StatArrow type='increase' />
                  30.00%
                </StatHelpText>
              </Stat>
            </StatGroup>
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
