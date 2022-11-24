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

const TrendsBox = (props) => {
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
    const [tabIndex, setTabIndex] = useState(props.options[0])
    const options = props.options
    const data = props.data
    const xAxisTitles = props.xAxisTitles
    const yAxisTitles = props.yAxisTitles
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: props.options[0],
      onChange: setTabIndex,
    })
    const group = getRootProps()
  
  return (

      <Flex pt='2vh'>
        <VStack pt='0px'>
          <HStack alignItems='top'>
            <VStack {...group} pl='1vw' pr='30px' pt='70px'>
              {options.map((value) => {
                const radio = getRadioProps({ value })
                return (
                  <RadioCard key={value} p={'0px'} width={'180px'} {...radio}>
                    <Center>
                    {value}
                    </Center>
                  </RadioCard>
                )
              })}
            </VStack>
            {options.map((value, index) => {
              return (
              value===tabIndex &&
              (<MultiLine 
                data={data[index]} 
                height={0.75*windowSize.innerHeight} 
                width={0.75*windowSize.innerWidth} 
                min={15}
                xAxisTitle={xAxisTitles[index]}
                yAxisTitle={yAxisTitles[index]}
              />)
              )
            })}
          </HStack>
        </VStack>
      </Flex>


  );
};

export default TrendsBox;
