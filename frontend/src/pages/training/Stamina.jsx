import React, { useEffect, useState, ReactNode, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import MultiLine from "../../components/visualisations/MultiLine";
import Sidebar from "../../components/sidebar/Sidebar";
import RadioCard from "../../components/radio/RadioCard";
import SpeedData from "../../dummy_data/training/speed.json";
import PowerData from "../../dummy_data/training/power.json";
import AccuracyData from "../../dummy_data/accuracy.json";

const Stamina = () => {
    // Window size for graph size
    const [windowSize, setWindowSize] = useState(getWindowSize());
    function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }
    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    // For radio
    const [tabIndex, setTabIndex] = useState('Speed')
    const options = ['Speed', 'Power']
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: 'Speed',
      onChange: setTabIndex,
    })
    const group = getRootProps()
  
  return (

      <Flex pt='5vh'>
        <VStack pt='10px'>
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
            {tabIndex==='Speed' && 
            <MultiLine 
              data={SpeedData} 
              height={0.7*windowSize.innerHeight} 
              width={0.62*windowSize.innerWidth} 
              min={15}
              xAxisTitle={'Time (seconds)'}
              yAxisTitle={'Speed (kph)'}
            />
            }
            {tabIndex==='Power' &&
            <MultiLine 
              data={PowerData} 
              height={0.7*windowSize.innerHeight} 
              width={0.62*windowSize.innerWidth} 
              min={500}
              xAxisTitle={' Time (seconds)'}
              yAxisTitle={'Power (psi)'}
            />
            }
          </HStack>
        </VStack>
      </Flex>


  );
};

export default Stamina;
