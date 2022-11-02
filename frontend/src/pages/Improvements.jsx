import React, { useEffect, useState, PureComponent } from "react";
import { useLocation } from "react-router-dom";
import {
  Heading,
  Flex
} from "@chakra-ui/react";
import { 
  PieChart, 
  Pie, 
  Sector, 
  Cell, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import MultiLine from '../components/MultiLine.jsx';

const Improvements = () => {
  
  return (
    <Flex w="100%" maxW="1366px" p="1rem" direction="column">
      <Heading align="center" my="1rem">
        Improvements
      </Heading>

      <MultiLine />
    </Flex>
  );
};

export default Improvements;