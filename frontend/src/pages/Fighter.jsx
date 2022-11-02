import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Heading,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Fighter = () => {
  
  return (
    <Tabs>
    <TabList>
      <Tab>Basic Information</Tab>
      <Tab>More Information</Tab>
      <Tab>Improvement Over Time</Tab>
      <Tab>Fight Information</Tab>
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
        <p>four!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
  );
};

export default Fighter;