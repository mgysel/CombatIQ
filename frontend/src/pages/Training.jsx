import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
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
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Box,
} from "@chakra-ui/react";
import Iframe from 'react-iframe-click';
import UploadVideoModal from './fight/UploadVideoModal.jsx';
import ChooseFightMenu from './fight/ChooseFightMenu.jsx';
import Trends from './trends/Trends.jsx';

const Training = () => {

  // Data 
  const summary = {
    'speed': '45',
    'rhythm': '45',
    'power': '32'
  }

  // Styling
  let backgroundColor = '#B2F5EA'

  let videoTitle = 'Video Title'
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
      <HStack pt='20px' pl='11vw'>
        <ChooseFightMenu />
        <UploadVideoModal />
      </HStack>
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

      <Box
        mt='0px' ml='10vw' mr='10vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px'>Summary</Text>
        <HStack spacing='24px' width='300px'>
          <Stat ml='10px'>
            <StatLabel>Speed</StatLabel>
            <StatNumber>{summary.speed}</StatNumber>
            <StatHelpText>kph</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Power</StatLabel>
            <StatNumber>{summary.power}</StatNumber>
            <StatHelpText>psi</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Rhythm</StatLabel>
            <StatNumber>{summary.rhythm}</StatNumber>
            <StatHelpText>unit</StatHelpText>
          </Stat>
        </HStack>
      </Box>

      <Box
        mt='20px' ml='10vw' mr='10vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px'>Analysis</Text>
        <TableContainer>
          <Table>
            <TableCaption>Table Caption?</TableCaption>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Speed (kph)</Th>
                <Th isNumeric>Power (psi)</Th>
                <Th isNumeric>Rhythm (units)</Th>
                <Th isNumeric>Position (units)</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr backgroundColor={backgroundColor}>
                <Td>Left Hand</Td>
                <Td>Average</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td>Max</Td>
                <Td isNumeric>30.48</Td>
                <Td isNumeric>30.48</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td>Min</Td>
                <Td isNumeric>0.91444</Td>
                <Td isNumeric>0.91444</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
              <Tr backgroundColor={backgroundColor}>
                <Td>Right Hand</Td>
                <Td>Average</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td>Max</Td>
                <Td isNumeric>30.48</Td>
                <Td isNumeric>30.48</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td>Min</Td>
                <Td isNumeric>0.91444</Td>
                <Td isNumeric>0.91444</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        mt='20px' mb='40px' ml='10vw' mr='10vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px'>Trends</Text>
        <Trends />
      </Box>
    </>
  );
};

export default Training;
