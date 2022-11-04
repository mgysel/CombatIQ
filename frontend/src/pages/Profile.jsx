import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Heading,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Image, Button } from '@chakra-ui/react'
import { Stack } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import { Box, VStack } from "@chakra-ui/react";
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

const Profile = () => {

  return (
    <VStack>
      <Heading align="left" my="1rem">
        My Profile
      </Heading>
      
      <Stack direction='row'>
        <Image 
          boxSize='190px'
          src='https://img.bleacherreport.net/img/images/photos/002/098/618/AP11111909790_crop_exact.jpg?w=1200&h=1200&q=75' alt='Dan Abramov' />
        <Stack spacing={1.8}>
          <Text fontSize='3xl'>Wanderlei Silva</Text>
          <Text fontSize='xl'>Brazilian American, Male</Text>
          <Text fontSize='xl'>age (3 July 1976)</Text>
          <Text fontSize='xl'>180 cm, 220 lb (%muscle, %fat, %water)</Text>
          <Text fontSize='xl'>Team: Chute Boxe Academy</Text>
        </Stack>
      </Stack>

      <Menu>
        <MenuButton as={Button} rightIcon='▾'>
          Privacy Setting
        </MenuButton>
        <MenuList>
          <MenuItem>Nationality</MenuItem>
          <MenuItem>Gender</MenuItem>
          <MenuItem>Birthday</MenuItem>
          <MenuItem>Height & weight</MenuItem>
          <MenuItem>Club</MenuItem>
        </MenuList>
      </Menu>


      <Tabs variant='enclosed'>
      <TabList>
      <Tab>Basic Information</Tab>
        <Tab>More Information</Tab>
        <Tab>Fight Information</Tab>
      </TabList>
    
      <TabPanels>
        <TabPanel>
          <p>We can have some introductions of this page. xxxxxxxxxxxx</p>

          <Stack direction='row'>

            <UnorderedList boxSize='300px'><Heading size='md' align='middle'>Attacking </Heading>
              <ListItem>Accuracy<Progress colorScheme='green' size='md' value={20} /></ListItem>
              <ListItem>Strength<Progress colorScheme='green' size='md' value={50} /></ListItem>
              <ListItem>aaaaaa<Progress colorScheme='green' size='md' value={10} /></ListItem>
              <ListItem>bbbbbb<Progress colorScheme='green' size='md' value={70} /></ListItem>
            </UnorderedList>

            <UnorderedList boxSize='300px'><Heading size='md' align='middle'>Movement </Heading>
              <ListItem>aaaaaa<Progress colorScheme='green' size='md' value={20} /></ListItem>
              <ListItem>bbbbbb<Progress colorScheme='green' size='md' value={50} /></ListItem>
              <ListItem>aaaaaa<Progress colorScheme='green' size='md' value={10} /></ListItem>
              <ListItem>bbbbbb<Progress colorScheme='green' size='md' value={70} /></ListItem>
            </UnorderedList>
  
          </Stack>

          <UnorderedList boxSize='300px'><Heading size='md' align='middle'>Defending </Heading>
              <ListItem>aaaaaa<Progress colorScheme='green' size='md' value={20} /></ListItem>
              <ListItem>bbbbbb<Progress colorScheme='green' size='md' value={50} /></ListItem>
              <ListItem>aaaaaa<Progress colorScheme='green' size='md' value={10} /></ListItem>
              <ListItem>bbbbbb<Progress colorScheme='green' size='md' value={70} /></ListItem>
            </UnorderedList>


        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>We can have some introductions of this page. xxxxxxxxxxxx</p>

          <StatGroup>
            <Stat>
              <StatLabel>Number of Fight</StatLabel>
              <StatNumber>49</StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                23.36%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Wins</StatLabel>
              <StatNumber>35</StatNumber>
              <StatHelpText>
                <StatArrow type='decrease' />
                19.05%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Losses</StatLabel>
              <StatNumber>14</StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                30.00%
              </StatHelpText>
            </Stat>
          </StatGroup>

          <OrderedList>
            <ListItem>Date, time, event, link of the event, etc.</ListItem>
            <ListItem>Date, time, event, link of the event, etc.</ListItem>
            <ListItem>Date, time, event, link of the event, etc.</ListItem>
            <ListItem>Date, time, event, link of the event, etc.</ListItem>
          </OrderedList>

        </TabPanel>
      </TabPanels>
    </Tabs>
  </VStack>
  );

};

export default Profile;
