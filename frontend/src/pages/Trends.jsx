import React, { useEffect, useState, ReactNode} from "react";
import { useLocation } from "react-router-dom";
import {
  Center,
  Heading,
  VStack,
} from "@chakra-ui/react";
import MultiLine from "../components/visualisations/MultiLine";
import Sidebar from "../components/sidebar/Sidebar";

const Trends = () => {
  
  return (

      <VStack>
        <Heading align="center" my="1rem">
          Improvement Over Time
        </Heading>
        <MultiLine />
        <Sidebar />
      </VStack>


  );
};

export default Trends;
