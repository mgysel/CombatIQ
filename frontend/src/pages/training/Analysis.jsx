import React, { useEffect, useState, PureComponent } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Center,
  HStack,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import StatTable from './TrainingStatTable.jsx';
import AnalysisData from '../../dummy_data/training/analysis.json';
import RadioCard from "../../components/radio/RadioCard";

const Analysis = (props) => {

    // For radio
    const [tabIndex, setTabIndex] = useState('All Punches')
    const options = ['All Punches', 'Jabs', 'Hooks', 'Uppercuts']
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: 'All Punches',
      onChange: setTabIndex,
    })
    const group = getRootProps()
  
  return (
    <HStack alignItems='top'>
      <VStack {...group} pl='1vw' pr='30px' pt='70px'>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} p={'0px'} width={'150px'} {...radio}>
              <Center>
              {value}
              </Center>
            </RadioCard>
          )
        })}
      </VStack>
      <Box pl='40px'>
        {tabIndex==='All Punches' && 
          <StatTable data={AnalysisData.overall} />
        }
        {tabIndex==='Jabs' && 
          <StatTable data={AnalysisData.jabs} />
        }
        {tabIndex==='Hooks' && 
          <StatTable data={AnalysisData.hooks} />
        }
        {tabIndex==='Uppercuts' && 
          <StatTable data={AnalysisData.uppercuts} />
        }
      </Box>
    </HStack>
  );
};

export default Analysis;