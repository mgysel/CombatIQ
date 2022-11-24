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

    let fighter1_accuracy = {
      'head': [22, 27],
      'body': [12, 18],
      'overall': [26, 45]
    }

    let fighter2_accuracy = {
      'head': [10, 21],
      'body': [9, 18],
      'overall': [19, 39]
    }

    let fighter1_overall_accuracy = (fighter1_accuracy.overall[0] / fighter1_accuracy.overall[1])
    let fighter2_overall_accuracy = (fighter2_accuracy.overall[0] / fighter2_accuracy.overall[1])

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
            <RingProgress data={fighter1_overall_accuracy}/>
          </HStack>
          <HumanBody data={fighter1_accuracy}/>
        </VStack>
        <VStack pl='10vw'>
          <HStack pb='30px'>
            <Text fontSize='1xl' pr='10px'>{props.fighter2.name}</Text>
            <RingProgress data={fighter2_overall_accuracy}/>
          </HStack>
          <HumanBody data={fighter2_accuracy}/>
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