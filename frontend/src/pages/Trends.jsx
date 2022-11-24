import React, { useEffect, useState, PureComponent } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";
import { 
  PieChart, 
  Pie, 
  Sector, 
  Cell, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import MultiLine from '../components/visualisations/MultiLine.jsx';
import Stamina from './training/Stamina.jsx';
import TrendsBox from './trends/TrendsBox.jsx';
import SpeedData from "../dummy_data/trends/speed.json";
import PowerData from "../dummy_data/trends/power.json";

const Improvements = () => {

  let pb_options = ['Speed', 'Power', 'Stamina']
  let pb_data = [SpeedData, PowerData, SpeedData]
  let pb_xAxis_Titles = ['Date', 'Date', 'Date']
  let pb_yAxis_Titles = ['Speed (kph)', 'Power (psi)', 'Stamina (punches per min)']
  let sparring_options = ['Speed', 'Power', 'Technque', 'Stamina', 'Aggressiveness']
  let sparring_data = [SpeedData, PowerData, SpeedData, PowerData, SpeedData]
  let sparring_xAxis_Titles = ['Date', 'Date', 'Date', 'Date', 'Date']
  let sparring_yAxis_Titles = ['Speed (kph)', 'Power (psi)', 'Technique', 'Stamina (punches per min)', 'Aggressiveness']
  let fight_options = ['Speed', 'Power', 'Technque', 'Stamina', 'Aggressiveness']
  let fight_data = [SpeedData, PowerData, SpeedData, PowerData, SpeedData]
  let fight_xAxis_Titles = ['Date', 'Date', 'Date', 'Date', 'Date']
  let fight_yAxis_Titles = ['Speed (kph)', 'Power (psi)', 'Technique', 'Stamina (punches per min)', 'Aggressiveness']
  
  return (
    <>
      <Box
        mt='20px' mb='20px' ml='2vw' mr='2vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='0px'>Punching Bag</Text>
        <TrendsBox 
          options={pb_options}
          data={pb_data}
          xAxisTitles={pb_xAxis_Titles}
          yAxisTitles={pb_yAxis_Titles}
        />
      </Box>
      <Box
        mt='20px' mb='20px' ml='2vw' mr='2vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='0px'>Sparring</Text>
        <TrendsBox 
          options={sparring_options}
          data={sparring_data}
          xAxisTitles={sparring_xAxis_Titles}
          yAxisTitles={sparring_yAxis_Titles}
        />
      </Box>
      <Box
        mt='20px' mb='40px' ml='2vw' mr='2vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='0px'>Fight</Text>
        <TrendsBox 
          options={fight_options}
          data={fight_data}
          xAxisTitles={fight_xAxis_Titles}
          yAxisTitles={fight_yAxis_Titles}
        />
      </Box>
    </>
  );
};

export default Improvements;