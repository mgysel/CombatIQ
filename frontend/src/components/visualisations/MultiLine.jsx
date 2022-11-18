import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Line } from '@ant-design/plots';
// import "@ant - design/flowchart/dist/index.css";

const MultiLine = (props) => {

  const [data, setData] = useState(props.data);

  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .then((json) => console.log(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  
  const config = {
    data,
    height: props.height,
    width: props.width,
    xField: 'date',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
      title: {
        text: 'Date',
      },
    },
    yAxis: {
      label: {
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
      title: {
        text: props.yAxisTitle,
      },
      min: props.min,
    },
  };
  
  return (
    <VStack>
      <Line {...config} />
    </VStack>
  );
};

export default MultiLine;