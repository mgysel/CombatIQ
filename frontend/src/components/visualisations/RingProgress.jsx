import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Line } from '@ant-design/plots';
// import "@ant - design/flowchart/dist/index.css";
import { RingProgress as AntRingProgress } from '@ant-design/plots';

const RingProgress = () => {

  const config = {
    height: 60,
    width: 60,
    autoFit: false,
    percent: 0.7,
    color: ['#5B8FF9', '#E8EDF3'],
  };
  
  return (
    <AntRingProgress {...config} />
  );
};

export default RingProgress;