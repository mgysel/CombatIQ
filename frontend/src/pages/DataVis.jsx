import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Heading,
  VStack,
} from "@chakra-ui/react";
import MultiLine from "../components/MultiLine";

const DataVis = () => {
  
  return (
    <VStack>
      <Heading align="center" my="1rem">
        DataVis Example
      </Heading>
      <MultiLine />
    </VStack>

  );
};

export default DataVis;