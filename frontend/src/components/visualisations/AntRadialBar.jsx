import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Line } from '@ant-design/plots';
// import "@ant - design/flowchart/dist/index.css";
import { RadialBar as AntRadialBar } from '@ant-design/plots';

const RadialBar = () => {

  const [data, setData] = useState(
    [
      {
        "year": "1991",
        "value": 3,
        "type": "Lon"
      },
      {
        "year": "1992",
        "value": 4,
        "type": "Lon"
      },
      {
        "year": "1993",
        "value": 3.5,
        "type": "Lon"
      },
      {
        "year": "1994",
        "value": 5,
        "type": "Lon"
      },
      {
        "year": "1995",
        "value": 4.9,
        "type": "Lon"
      },
      {
        "year": "1996",
        "value": 6,
        "type": "Lon"
      },
      {
        "year": "1997",
        "value": 7,
        "type": "Lon"
      },
      {
        "year": "1998",
        "value": 9,
        "type": "Lon"
      },
      {
        "year": "1999",
        "value": 13,
        "type": "Lon"
      },
      {
        "year": "1991",
        "value": 3,
        "type": "Bor"
      },
      {
        "year": "1992",
        "value": 4,
        "type": "Bor"
      },
      {
        "year": "1993",
        "value": 3.5,
        "type": "Bor"
      },
      {
        "year": "1994",
        "value": 5,
        "type": "Bor"
      },
      {
        "year": "1995",
        "value": 4.9,
        "type": "Bor"
      },
      {
        "year": "1996",
        "value": 6,
        "type": "Bor"
      },
      {
        "year": "1997",
        "value": 7,
        "type": "Bor"
      },
      {
        "year": "1998",
        "value": 9,
        "type": "Bor"
      },
      {
        "year": "1999",
        "value": 13,
        "type": "Bor"
      }
    ]
  );

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    colorField: 'type',
    isStack: true,
    maxAngle: 360,
    width: 100,
    height: 100,
  };
  
  return (
    <VStack>
      <AntRadialBar {...config} />;
    </VStack>
  );
};

export default RadialBar;