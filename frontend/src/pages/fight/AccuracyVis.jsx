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
  let fightAccuracy = {
    'Overall': {
      'fighter1': {
        'head': [22, 27],
        'body': [14, 18],
        'overall': [26, 45]
      },
      'fighter2': {
        'head': [10, 21],
        'body': [9, 18],
        'overall': [19, 39]
      }
    },
    'Jab': {
      'fighter1': {
        'head': [10, 14],
        'body': [4, 11],
        'overall': [14, 25]
      },
      'fighter2': {
        'head': [8, 15],
        'body': [4, 10],
        'overall': [12, 25]
      },
    },
    'Hook': {
      'fighter1': {
        'head': [4, 8],
        'body': [4, 4],
        'overall': [8, 12]
      },
      'fighter2': {
        'head': [1, 8],
        'body': [4, 4],
        'overall': [5, 12]
      },
    },
    'Uppercut': {
      'fighter1': {
        'head': [0, 4],
        'body': [4, 4],
        'overall': [4, 8]
      },
      'fighter2': {
        'head': [1, 1],
        'body': [1, 1],
        'overall': [2, 2]
      }
    }
  }

  let fightSummary = {
    'Overall': {
      'fighter1': {
        'strikes_thrown': 45,
        'strikes_landed': 26,
        'strikes_blocked': 12,
        'strikes_dodged': 10,
        'accuracy': '72%',
        'speed': 45,
        'power': 820 
      },
      'fighter2': {
        'strikes_thrown': 21,
        'strikes_landed': 10,
        'strikes_blocked': 8,
        'strikes_dodged': 7,
        'accuracy': '64%',
        'speed': 40,
        'power': 650 
      }
    },
    'Jab': {
      'fighter1': {
        'strikes_thrown': 14,
        'strikes_landed': 25,
        'strikes_blocked': 14,
        'strikes_dodged': 8,
        'accuracy': '56%',
        'speed': 39,
        'power': 920 
      },
      'fighter2': {
        'strikes_thrown': 12,
        'strikes_landed': 25,
        'strikes_blocked': 12,
        'strikes_dodged': 6,
        'accuracy': '48%',
        'speed': 42,
        'power': 750 
      }
    },
    'Hook': {
      'fighter1': {
        'strikes_thrown': 8,
        'strikes_landed': 12,
        'strikes_blocked': 3,
        'strikes_dodged': 6,
        'accuracy': '67%',
        'speed': 49,
        'power': 720 
      },
      'fighter2': {
        'strikes_thrown': 5,
        'strikes_landed': 12,
        'strikes_blocked': 3,
        'strikes_dodged': 4,
        'accuracy': '42%',
        'speed': 42,
        'power': 547 
      }
    },
    'Uppercut': {
      'fighter1': {
        'strikes_thrown': 4,
        'strikes_landed': 8,
        'strikes_blocked': 0,
        'strikes_dodged': 0,
        'accuracy': '50%',
        'speed': 41,
        'power': 720 
      },
      'fighter2': {
        'strikes_thrown': 2,
        'strikes_landed': 2,
        'strikes_blocked': 3,
        'strikes_dodged': 1,
        'accuracy': '100%',
        'speed': 32,
        'power': 550 
      }
    }
    
  }

  const [fightSummaryData, setFightSummaryData] = React.useState(fightSummary['Overall'])
  const [fightAccuracyData, setFightAccuracyData] = React.useState(fightAccuracy['Overall'])

  // For radio
  const handleChangeButton = () => {
    setFightSummaryData(fightSummary[tabIndex])
    setFightAccuracyData(fightSummary[tabIndex])
  }
  const options = ['Overall', 'Jab', 'Hook', 'Uppercut']
  const [tabIndex, setTabIndex] = useState(options[0])
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Overall',
    onChange: setTabIndex,
  })
  const group = getRootProps()

  useEffect(() => {
    console.log("USE EFFECT")
    console.log("tabindex: ", tabIndex)
    console.log("FIGHT SUMMARY OF TAB INDEX")
    console.log(fightSummary[tabIndex])
    console.log("Fight summary data BEFORE")
    console.log(fightSummaryData)


    setFightSummaryData(fightSummary[tabIndex])
    setFightAccuracyData(fightAccuracy[tabIndex])

    console.log("Fight summary data AFTER")
    console.log(fightSummaryData)
  }, [tabIndex]);

  return (
    <VStack>
      <Grid templateColumns='repeat(3, 1fr)' gap={5}>
        <VStack>
          <HStack pb='30px'>
            <Text fontSize='1xl' pr='10px'>{props.fighter1.name}</Text>
          </HStack>
          { tabIndex==='Overall' && 
            <HumanBody data={fightAccuracy['Overall']['fighter1']}/>
          }
          { tabIndex==='Jab' && 
            <HumanBody data={fightAccuracy['Jab']['fighter1']}/>
          }
          { tabIndex==='Hook' && 
            <HumanBody data={fightAccuracy['Hook']['fighter1']}/>
          }
          { tabIndex==='Uppercut' && 
            <HumanBody data={fightAccuracy['Uppercut']['fighter1']}/>
          }
        </VStack>
        <VStack pt='70px' pl='10px' pr='10px'>
          { tabIndex==='Overall' && 
            <FightStatTable data={fightSummary['Overall']} summary={fightSummary['Overall']} fighter1={props.fighter1} fighter2={props.fighter2} />
          }
          { tabIndex==='Jab' && 
            <FightStatTable data={fightSummary['Jab']} summary={fightSummary['Jab']} fighter1={props.fighter1} fighter2={props.fighter2} />
          }
          { tabIndex==='Hook' && 
            <FightStatTable data={fightSummary['Hook']} summary={fightSummary['Hook']} fighter1={props.fighter1} fighter2={props.fighter2} />
          }
          { tabIndex==='Uppercut' && 
            <FightStatTable data={fightSummary['Uppercut']} summary={fightSummary['Uppercut']} fighter1={props.fighter1} fighter2={props.fighter2} />
          }
        </VStack>
        <VStack>
          <HStack pb='30px'>
            <Text fontSize='1xl' pr='10px'>{props.fighter2.name}</Text>
          </HStack>
          { tabIndex==='Overall' && 
            <HumanBody data={fightAccuracy['Overall']['fighter2']}/>
          }
          { tabIndex==='Jab' && 
            <HumanBody data={fightAccuracy['Jab']['fighter2']}/>
          }
          { tabIndex==='Hook' && 
            <HumanBody data={fightAccuracy['Hook']['fighter2']}/>
          }
          { tabIndex==='Uppercut' && 
            <HumanBody data={fightAccuracy['Uppercut']['fighter2']}/>
          }
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