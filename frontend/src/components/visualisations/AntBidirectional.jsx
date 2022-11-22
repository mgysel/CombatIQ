import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Line } from '@ant-design/plots';
// import "@ant - design/flowchart/dist/index.css";
import { BidirectionalBar } from '@ant-design/plots';

const AntBidirectional = (props) => {
  let fighter1 = 'Fighter 1'
  let fighter2 = 'Fighter 2'

  const data = [
    {
      country: 'Cross',
      'Fighter 1': 40,
      'Fighter 2': 26,
    },
    {
      country: 'Jab',
      'Fighter 1': 118,
      'Fighter 2': 57,
    },
    {
      country: 'Lead Hook',
      'Fighter 1': 17,
      'Fighter 2': 27,
    },
    {
      country: 'Rear Hook',
      'Fighter 1': 31,
      'Fighter 2': 22,
    },
    {
      country: 'Uppercut',
      'Fighter 1': 7,
      'Fighter 2': 7,
    },
  ];

  const config = {
    data,
    xField: 'country',
    xAxis: {
      position: 'bottom',
      maxLimit: 200,
    },
    interactions: [
      {
        type: 'active-region',
      },
    ],
    label: {

    },
    yField: [fighter1, fighter2],
    tooltip: {
      shared: true,
      showMarkers: false,
    },
    width: 1000,
  };
  
  return (
    <VStack>
      <BidirectionalBar {...config} />;
    </VStack>
  );
};

export default AntBidirectional;