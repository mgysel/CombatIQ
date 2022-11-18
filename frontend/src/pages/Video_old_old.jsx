import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Flex,
  Heading,
  VStack,
  Divider,
} from "@chakra-ui/react";
import VideoInput from '../components/VideoInput.jsx'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
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
import { Button, Image } from "@chakra-ui/react";
import { BodyComponent } from "reactjs-human-body";
import { Stack, Text } from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

const Video = () => {

  const [params, setParams] = useState();
  const exampleParams = {
    head: { selected: true },
    left_arm: { show: false }
  }
  
  return (
    <VStack>
      <Heading align="center" my="1rem">
        Please upload a video
      </Heading>
      <VideoInput width={400} height={300} />
      <Tabs variant='enclosed'>
        <TabList>
          <Tab>Bio</Tab>
          <Tab>Round 1</Tab>
          <Tab>Round N</Tab>
          <Tab>Overall</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Stack direction='row'>
              <Image 
                boxSize='100px'
                src='https://img.bleacherreport.net/img/images/photos/002/098/618/AP11111909790_crop_exact.jpg?w=1200&h=1200&q=75' alt='Dan Abramov' />
              <Stack spacing={2}>
                <Text fontSize='2xl'>Wanderlei Silva</Text>
                <Text fontSize='l'>Brazilian American, Male</Text>
                <Text fontSize='l'>age (3 July 1976)</Text>
                <Text fontSize='l'>180 cm, 220 lb (%muscle, %fat, %water)</Text>
                <Text fontSize='l'>Team: Chute Boxe Academy</Text>
              </Stack>
            </Stack>

            <StatGroup pt='50px'>
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
          </TabPanel>
          <TabPanel>
            <p>two!</p>
            <div>
              <BodyComponent
                  partsInput={{
                    head: { show: true },
                    left_shoulder: { show: true },
                    right_shoulder: { show: true },
                    left_arm: { show: true },
                    right_arm: { show: true },
                    chest: { show: true },
                    stomach: { show: true },
                    left_leg: { show: true },
                    right_leg: { show: true },
                    left_hand: { show: true },
                    right_hand: { show: true },
                    left_foot: { show: true },
                    right_foot: { show: true }
                  }}
                />
            </div>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
            <div>
              <BodyComponent
                  partsInput={{
                    head: { show: true },
                    left_shoulder: { show: true },
                    right_shoulder: { show: true },
                    left_arm: { show: true },
                    right_arm: { show: true },
                    chest: { show: true },
                    stomach: { show: true },
                    left_leg: { show: true },
                    right_leg: { show: true },
                    left_hand: { show: true },
                    right_hand: { show: true },
                    left_foot: { show: true },
                    right_foot: { show: true }
                  }}
                />
            </div>
          </TabPanel>
          <TabPanel>
            <p>Some introductions of this page</p>
            <Menu>
              <MenuButton as={Button} rightIcon='▾'>
                Select a metric
              </MenuButton>
              <MenuList>
                <MenuItem minH='48px'>
                  <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='https://placekitten.com/100/100'
                    alt='Strikes'
                    mr='12px'
                  />
                  <span>Strikes</span>
                </MenuItem>
                <MenuItem minH='40px'>
                  <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='https://placekitten.com/120/120'
                    alt='Significant Strikes'
                    mr='12px'
                  />
                  <span>Significant Strikes</span>
                </MenuItem>
              </MenuList>
            </Menu>
            <div>
              <BodyComponent
                  partsInput={{
                    head: { show: true },
                    left_shoulder: { show: true },
                    right_shoulder: { show: true },
                    left_arm: { show: true },
                    right_arm: { show: true },
                    chest: { show: true },
                    stomach: { show: true },
                    left_leg: { show: true },
                    right_leg: { show: true },
                    left_hand: { show: true },
                    right_hand: { show: true },
                    left_foot: { show: true },
                    right_foot: { show: true }
                  }}
                />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default Video;
