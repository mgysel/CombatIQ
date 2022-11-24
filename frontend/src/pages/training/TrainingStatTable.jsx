import React, { useEffect, useState, PureComponent } from "react";
import { useLocation } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const TrainingStatTable = (props) => {

  const [data, setData] = useState(props.data);
  console.log(data)

  // Styling
  let backgroundColor = '#B2F5EA'
  let statWidth = '70px'
  let tableColumnWidth='13vw'
  
  return (
    <TableContainer>
    <Table>
      <Thead>
        <Tr>
          <Th width='10vw'></Th>
          <Th width='1vw'></Th>
          <Th isNumeric width='18vw'>Speed (kph)</Th>
          <Th isNumeric width='18vw'>Power (psi)</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr backgroundColor={backgroundColor} border='5px solid white'>
          <Td>Overall</Td>
          <Td>Average</Td>
          <Td isNumeric>{data.speed.both_hands.average}</Td>
          <Td isNumeric>{data.power.both_hands.average}</Td>
        </Tr>
        <Tr backgroundColor={backgroundColor} border='5px solid white'>
          <Td>Left Hand</Td>
          <Td>Average</Td>
          <Td isNumeric>{data.speed.left_hand.average}</Td>
          <Td isNumeric>{data.power.left_hand.average}</Td>
        </Tr>
        <Tr border='5px solid white'>
          <Td></Td>
          <Td>Max</Td>
          <Td isNumeric>{data.speed.left_hand.max}</Td>
          <Td isNumeric>{data.power.left_hand.max}</Td>
        </Tr>
        <Tr border='5px solid white'>
          <Td></Td>
          <Td>Min</Td>
          <Td isNumeric>{data.speed.left_hand.min}</Td>
          <Td isNumeric>{data.power.left_hand.min}</Td>
        </Tr>
        <Tr backgroundColor={backgroundColor} border='5px solid white'>
          <Td>Right Hand</Td>
          <Td>Average</Td>
          <Td isNumeric>{data.speed.right_hand.average}</Td>
          <Td isNumeric>{data.power.right_hand.average}</Td>
        </Tr>
        <Tr border='5px solid white'>
          <Td></Td>
          <Td>Max</Td>
          <Td isNumeric>{data.speed.right_hand.max}</Td>
          <Td isNumeric>{data.power.right_hand.max}</Td>
        </Tr>
        <Tr border='5px solid white'>
          <Td></Td>
          <Td>Min</Td>
          <Td isNumeric>{data.speed.right_hand.min}</Td>
          <Td isNumeric>{data.power.right_hand.min}</Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
  );
};

export default TrainingStatTable;