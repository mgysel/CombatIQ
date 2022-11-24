import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Heading,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Image, Button } from '@chakra-ui/react'
import { Grid, Stack, HStack, VStack, Right } from "@chakra-ui/react";
import { Text, Flex, Center } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'
import {
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  MenuIcon,
  MenuCommand
} from '@chakra-ui/react'
import RadarBar from "../components/visualisations/RadarBar";


const Profile = () => {

    // Handle data 
    const fighter = {
      'image': 'https://img.bleacherreport.net/img/images/photos/002/098/618/AP11111909790_crop_exact.jpg?w=1200&h=1200&q=75',
      'name': 'Wanderlei Silva',
      'ethnicity': 'Brazilian American',
      'age': '46 (3 July 1976)',
      'sex': 'Male',
      'height': '180',
      'weight': '220',
      'hand': 'right hand',
      'class': 'middle weight',
      'club': 'Chute Boxe Academy'
    }

    const fightHis = {
      'num_fight': 73,
      'num_round': 114,
      'win': {
        'num': 35,
        'ko': 25
      },
      'loss': {
        'num': 28,
        'ko': 3
      },
      'list': {
        'fight1': 'LOSS, 29 / Sep / 2018, 4:32, Bellator 206 - Mousasi vs. MacDonald'
      }
    }

    const trainingHis = {
      'num_video': 45,
      'list': {
        'video1': 'Lausanne_1, Punch Bag, 23 / Nov / 2022, 5:00'
      }
    }

    var score = {
      'speed': {
        'jab': 70,
        'hook': 23,
        'uppercut': 43
      },
      'power': {
        'jab': 68,
        'hook': 50,
        'uppercut': 85,
        'damage': 49
      },
      'technique': {
        'strike_accuracy': 65,
        'blocking': 39,
        'reaction': 46,
        'control': 71
      },
      'stamina': {
        'rhythm': 25,
        'resistance': 67
      },
      'aggressiveness': {
        'pressing': 66,
        'attacking': 81,
        'counter_attacking': 45
      }
    }

    function getColor (x){
      if (x<40) {return 'red.500';}
      else if (x>=70 && x <85) {return 'green.300';}
      else if (x>=85) {return 'green.500';}
      else {return 'yellow.500'}
    };

    // Styling
    let boxSize = '230px'


  return (
    <>
      <Box
        mt='20px' ml='10vw' mr='10vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px'>My Profile</Text>
        <HStack spacing='24px' width='1500px'>
          <Image 
            boxSize='200px'
            src={fighter.image} alt='Dan Abramov' />
          <VStack spacing={1.8} align='left'>
            <Text fontSize='3xl'>{fighter.name}</Text>
            <Text fontSize='xl'>Gender: {fighter.sex},  Age: {fighter.age}</Text>
            <Text fontSize='xl'>{fighter.height} cm, {fighter.weight} lb (%muscle, %fat, %water)</Text>
            <Text fontSize='xl'>Hand: {fighter.hand}</Text>
            <Text fontSize='xl'>Class: {fighter.class}</Text>
            <Text fontSize='xl'>Club: {fighter.club}</Text>
          </VStack>
        </HStack>
      </Box>

      <Box
        mt='20px' ml='10vw' mr='10vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px' pl='20px'>General Stats</Text>
        <HStack spacing={0} mt='20px'>
          <RadarBar
              data={[
              Math.ceil(((score.speed.jab+score.speed.hook+score.speed.uppercut)/3)), //average score of speed
              Math.ceil(((score.power.jab+score.power.hook+score.power.uppercut+score.power.damage)/4)), //average score of power
              Math.ceil(((score.aggressiveness.pressing+score.aggressiveness.attacking+score.aggressiveness.counter_attacking)/3)), //average score of aggressiveness
              Math.ceil(((score.technique.strike_accuracy+score.technique.blocking+score.technique.reaction+score.technique.control)/4)), //average score of technique
              Math.ceil(((score.stamina.rhythm+score.stamina.resistance)/2)) //average score of stamina 
            ]}
            />

          <VStack>
            <Grid templateColumns='repeat(3, 0fr)' gap={12} pl='40px' pb='35px'>
              <UnorderedList><Heading size='md' align='middle' pb='10px'>SPEED</Heading>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.speed.jab)}><Text fontSize='xl' color='white'>{score.speed.jab}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jab</Text></Flex></ListItem>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.speed.hook)}><Text fontSize='xl' color='white'>{score.speed.hook}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hook</Text></Flex></ListItem>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.speed.uppercut)}><Text fontSize='xl' color='white'>{score.speed.uppercut}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uppercut</Text></Flex></ListItem>
              </UnorderedList>

              <UnorderedList><Heading size='md' align='middle' pb='10px'>POWER</Heading>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.power.jab)}><Text fontSize='xl' color='white'>{score.power.jab}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jab</Text></Flex></ListItem>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.power.hook)}><Text fontSize='xl' color='white'>{score.power.hook}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hook</Text></Flex></ListItem>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.power.uppercut)}><Text fontSize='xl' color='white'>{score.power.uppercut}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uppercut</Text></Flex></ListItem>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.power.damage)}><Text fontSize='xl' color='white'>{score.power.damage}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Damage</Text></Flex></ListItem>
              </UnorderedList>

              <UnorderedList width='240px'><Heading size='md' align='middle' pb='8px'>TECHNIQUE</Heading>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.technique.strike_accuracy)}><Text fontSize='xl' color='white'>{score.technique.strike_accuracy}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Strike Accuracy</Text></Flex></ListItem>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.technique.blocking)}><Text fontSize='xl' color='white'>{score.technique.blocking}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blocking</Text></Flex></ListItem>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.technique.reaction)}><Text fontSize='xl' color='white'>{score.technique.reaction}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reaction</Text></Flex></ListItem>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.technique.control)}><Text fontSize='xl' color='white'>{score.technique.control}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Control</Text></Flex></ListItem>
              </UnorderedList>
            </Grid>

            <Grid templateColumns='repeat(2, 0fr)' gap={12} pl='20px' pr='20px' pb='35px'>
              <UnorderedList width='240px'><Heading size='md' align='middle' pb='10px'>STAMINA</Heading>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.stamina.rhythm)}><Text fontSize='xl' color='white'>{score.stamina.rhythm}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rhythm</Text></Flex></ListItem>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.stamina.resistance)}><Text fontSize='xl' color='white'>{score.stamina.resistance}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resistance</Text></Flex></ListItem>
              </UnorderedList>

              <UnorderedList width='240px'><Heading size='md' align='middle' pb='10px'>AGGRESSIVENESS</Heading>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.aggressiveness.pressing)}><Text fontSize='xl' color='white'>{score.aggressiveness.pressing}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pressing</Text></Flex></ListItem>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.aggressiveness.attacking)}><Text fontSize='xl' color='white'>{score.aggressiveness.attacking}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attacking</Text></Flex></ListItem>
                <ListItem><Flex><Center w='40px' bg= {getColor(score.aggressiveness.counter_attacking)}><Text fontSize='xl' color='white'>{score.aggressiveness.counter_attacking}</Text></Center><Text fontSize='xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Counter Attacking</Text></Flex></ListItem>
              </UnorderedList>
            </Grid>
          </VStack>
        </HStack>
      </Box>


      <Box
        mt='20px' ml='10vw' mr='10vw' 
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px'>Fight History</Text>
        <StatGroup>
            <Stat>
              <StatLabel>Number of Fights</StatLabel>
              <StatNumber>{fightHis.num_fight}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Number of Rounds</StatLabel>
              <StatNumber>{fightHis.num_round}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Wins</StatLabel>
              <StatNumber>{fightHis.win.num}</StatNumber>
              <StatHelpText>
                [{fightHis.win.ko} KOs]
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Losses</StatLabel>
              <StatNumber>{fightHis.loss.num}</StatNumber>
              <StatHelpText>
                [{fightHis.loss.ko} KOs]
              </StatHelpText>
            </Stat>
          </StatGroup>

          <HStack pt='20px' pl='58vw'>
            <Menu mt = '10px' >
              <MenuButton as={Button} rightIcon='▾'>
                Choose Specific Fight
              </MenuButton>
              <MenuList>
                <MenuItem>{fightHis.list.fight1}</MenuItem>
                <MenuItem>Result, Date, time, event</MenuItem>
                <MenuItem>Result, Date, time, event</MenuItem>
                <MenuItem>Result, Date, time, event</MenuItem>
                <MenuItem>Result, Date, time, event</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
      </Box>

      <Box
        mt='20px' ml='10vw' mr='10vw' mb='40px'
        p='20px'
        pt='10px'
        borderWidth='1px' borderRadius='lg' overflow='hidden' 
      >
        <Text fontSize='2xl' pb='10px'>Training History</Text>
        <StatGroup>
            <Stat>
              <StatLabel>Number of Training Videos</StatLabel>
              <StatNumber>{trainingHis.num_video}</StatNumber>
            </Stat>
          </StatGroup>

          <HStack pt='20px' pl='58vw'>
            <Menu mt='10px' >
              <MenuButton as={Button} rightIcon='▾'>
                Choose Training Video
              </MenuButton>
              <MenuList>
                <MenuItem>{trainingHis.list.video1}</MenuItem>
                <MenuItem>Video Name, Category, Date, time</MenuItem>
                <MenuItem>Video Name, Category, Date, time</MenuItem>
                <MenuItem>Video Name, Category, Date, time</MenuItem>
                <MenuItem>Video Name, Category, Date, time</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
      </Box>
    </>
  );

};

export default Profile;
