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
import FightStatTable from "./FightStatTable.jsx"

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

    let fighter1_summary = {
      'strikes_thrown': 45,
      'strikes_landed': 26,
      'strikes_blocked': 12,
      'strikes_dodged': 10,
      'accuracy': '72%',
      'speed': 45,
      'power': 820 
    }

    let fighter2_summary = {
      'strikes_thrown': 21,
      'strikes_landed': 10,
      'strikes_blocked': 8,
      'strikes_dodged': 7,
      'accuracy': '64%',
      'speed': 40,
      'power': 650 
    }

    let fight_summary_data = {
      'fighter1': fighter1_summary,
      'fighter2': fighter2_summary
    }

    let fighter1_overall_accuracy = (fighter1_accuracy.overall[0] / fighter1_accuracy.overall[1])
    let fighter2_overall_accuracy = (fighter2_accuracy.overall[0] / fighter2_accuracy.overall[1])

    // For radio
    const [tabIndex, setTabIndex] = useState(0)

    const options = ['Overall', 'Jab', 'Hook', 'Uppercut']
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: 'Overall',
      onChange: console.log,
    })
    const group = getRootProps()

  return (
    <VStack>
      <Grid templateColumns='repeat(3, 1fr)' gap={20} pl='6.5vw'>
        <VStack>
          <HStack pb='30px'>
            <Text fontSize='1xl' pr='10px'>{props.fighter1.name}</Text>
          </HStack>
          <HumanBody data={fighter1_accuracy}/>
        </VStack>
        <VStack pt='70px' pl='10px' pr='10px'>
          <FightStatTable data={fight_summary_data} summary={fight_summary_data} fighter1={props.fighter1} fighter2={props.fighter2} />
        </VStack>
        <VStack>
          <HStack pb='30px'>
            <Text fontSize='1xl' pr='10px'>{props.fighter2.name}</Text>
          </HStack>
          <HumanBody data={fighter2_accuracy} />
        </VStack>
      </Grid>
      <Center>
        <HStack pt='75px'>
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