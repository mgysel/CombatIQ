import React, { useEffect, useState } from "react";
import {
  Center,
  Grid,
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
      <Grid templateColumns='repeat(2, 1fr)' gap={20} pl='12vw'>
        <VStack pr='10vw'>
          <HStack pb='30px'>
            <Text fontSize='1xl' pr='10px'>{props.fighter1.name}</Text>
            <RingProgress />
          </HStack>
          <HumanBody />
        </VStack>
        <VStack pl='10vw'>
          <HStack pb='30px'>
            <Text fontSize='1xl' pr='10px'>{props.fighter2.name}</Text>
            <RingProgress />
          </HStack>
          <HumanBody />
        </VStack>
      </Grid>
      <Center>
        <HStack pt='260px'>
          <Text fontSize='1xl' pr='10px'>Choose Attack</Text>
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