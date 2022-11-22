import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CheckCircleIcon, WarningTwoIcon } from '@chakra-ui/icons'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  StackDivider,
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
  Text,
  useRadioGroup,
  VStack,
  Badge,
  Box,
  Avatar
} from "@chakra-ui/react";
import Iframe from 'react-iframe-click';
import HumanBody from "../components/humanbody/HumanBody";
import RadioCard from "../components/radio/RadioCard";
import RingProgress from "../components/visualisations/RingProgress"

const Training = () => {

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

      <Center>
      <VStack width={1100}>
      <Flex>
        <Avatar src='https://bit.ly/sage-adebayo' />
        <Box ml='3'>
          <Text fontWeight='bold'>
            User's name
            <Badge ml='1' colorScheme='green'>
              New
            </Badge>
          </Text>
          <Text fontSize='sm'>Bio</Text>
        </Box>
      </Flex>
      <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='l' textTransform='uppercase'>
                Summary
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Speed was successfully analysed.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Rhythm was successfully analysed.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Power was successfully analysed.
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={WarningTwoIcon} color='red.500' />
                  Can't define any defense style.
                </ListItem>
              </List>
            </Box>
            <Box>
              <Heading size='l' textTransform='uppercase'>
                Overview
              </Heading>
              <Text pt='2' fontSize='sm'>
              This is an overview of the report / data. text here xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </Text>
            </Box>
            <Box>
              <Heading size='l' textTransform='uppercase'>
                Analysis
              </Heading>
              <StatGroup pt='50px'>
              <Stat>
                <StatLabel>Speed</StatLabel>
                <StatNumber>45</StatNumber>
                miles/hour
                <StatHelpText>
                  <StatArrow type='increase' />
                  23.36%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Rhythm</StatLabel>
                <StatNumber>3</StatNumber>
                punches/s
                <StatHelpText>
                  <StatArrow type='decrease' />
                  19.05%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Power</StatLabel>
                <StatNumber>2500</StatNumber>
                N
                <StatHelpText>
                  <StatArrow type='increase' />
                  30.00%
                </StatHelpText>
              </Stat>
            </StatGroup>
            </Box>
          </Stack>
      </VStack>
      </Center>
    </>
  );
};

export default Training;
