import React, { useEffect, useState } from "react";
import {
  Center,
  HStack,
  VStack,
  Text,
  useRadioGroup,
} from "@chakra-ui/react";
import HumanBody from "../../components/humanbody/HumanBody";
import RingProgress from "../../components/visualisations/RingProgress";
import RadioCard from "../../components/radio/RadioCard";

const AccuracyVis = (props) => {

    // For radio
    const [tabIndex, setTabIndex] = useState(0)

    const options = ['Overall', 'Cross', 'Jab', 'Lead Hook', 'Rear Hook', 'Uppercut']
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: 'Overall',
      onChange: console.log,
    })
    const group = getRootProps()

  return (
    <VStack>
      <Center pt='20px'>
        <VStack pr='10vw'>
          <HStack pb='30px'>
            <Text fontSize='2xl' pr='10px'>{props.fighter1.name} Accuracy</Text>
            <RingProgress />
          </HStack>
          <HumanBody />
        </VStack>
        <VStack pl='10vw'>
          <HStack pb='30px'>
            <Text fontSize='2xl' pr='10px'>{props.fighter2.name} Accuracy</Text>
            <RingProgress />
          </HStack>
          <HumanBody />
        </VStack>
      </Center>
      <Center>
      <HStack pt='260px'>
        <Text fontSize='2xl' pr='10px'>Choose Attack</Text>
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
        </HStack>.
      </Center>
    </VStack>
  );
};

export default AccuracyVis;