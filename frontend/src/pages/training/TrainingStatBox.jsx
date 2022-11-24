import React, { useEffect, useState, PureComponent } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Center,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import StatTable from './TrainingStatTable.jsx';
import AnalysisData from '../../dummy_data/training/analysis.json';
import RadioCard from "../../components/radio/RadioCard";

const TrainingStatBox = (props) => {

  // For radio
  const [data, setData] = useState(props.data)
  
  return (
    <HStack spacing='20px' width='800px'>
    <Stat ml='10px' align='center'>
      <StatLabel mt='27px'>Time</StatLabel>
      <StatNumber>{data.time}</StatNumber>
      <StatHelpText>mins</StatHelpText>
    </Stat>
    <Stat align='center'>
      <StatLabel mt='27px'>Stamina</StatLabel>
      <StatNumber>{data.stamina}</StatNumber>
      <StatHelpText>strikes/min</StatHelpText>
    </Stat>
    <Stat align='center'>
      <StatLabel>Strikes</StatLabel>
      <StatNumber>{data.strikes}</StatNumber>
    </Stat>
    <Stat align='center'>
      <StatLabel width='120px'>Significant Strikes</StatLabel>
      <StatNumber>{data.sigstrikes}</StatNumber>
    </Stat>
    <Stat align='center'>
      <StatLabel>Jabs</StatLabel>
      <StatNumber>{data.jabs}</StatNumber>
    </Stat>
    <Stat align='center'>
      <StatLabel>Hooks</StatLabel>
      <StatNumber>{data.hooks}</StatNumber>
    </Stat>
    <Stat align='center'>
      <StatLabel>Uppercuts</StatLabel>
      <StatNumber>{data.uppercuts}</StatNumber>
    </Stat>
  </HStack>
  );
};

export default TrainingStatBox;