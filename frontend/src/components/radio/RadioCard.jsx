import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  useRadio,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { Line } from '@ant-design/plots';
// import "@ant - design/flowchart/dist/index.css";

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  
  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        width={props.width}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
        verticalAlign='middle'
      >
        <Text pb={props.p} pt={props.p}>
          {props.children}
        </Text>
      </Box>
    </Box>
  );
};

export default RadioCard;