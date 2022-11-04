import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Flex,
  Heading,
  VStack,
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
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
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
          </TabPanel>
        </TabPanels>
      </Tabs>
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
    </VStack>
  );
};

export default Video;