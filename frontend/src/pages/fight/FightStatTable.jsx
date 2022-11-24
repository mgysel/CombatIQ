import React, { useEffect, useState, PureComponent } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Center,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import AnalysisData from '../../dummy_data/training/analysis.json';
import RadioCard from "../../components/radio/RadioCard";

const FightStatTable = (props) => {

  const [data, setData] = useState(props.data)
  const [fighter1, setFighter1] = useState(props.fighter1)
  const [fighter2, setFighter2] = useState(props.fighter2)
  const fighter1Name = fighter1.name.split(" ")
  const fighter2Name = fighter2.name.split(" ")


  // Styling
  let rowHeight = '60px'
  let cellpl = '30px'
  let cellpr = '30px'
  
  return (
    <TableContainer>
      <Table size='small'>
        <Thead>
          <Tr>
            <Th>
              <Center>
                {fighter1Name[1]}
              </Center>
            </Th>
            <Th></Th>
            <Th isNumeric>
              <Center>
                {fighter2Name[1]}
              </Center>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr height={rowHeight}>
            <Td>
              <Center pl={cellpl} pr={cellpr}>
                {data.fighter1.strikes_thrown}
              </Center>
            </Td>
            <Th fontSize='sm'>
              <Center>
                Strikes Thrown
              </Center>
            </Th>
            <Td>
              <Center pl={cellpl} pr={cellpr}>
                {data.fighter2.strikes_thrown}
              </Center>
            </Td>
          </Tr>
          <Tr height={rowHeight}>
            <Td>
              <Center pl={cellpl} pr={cellpr}>
                {data.fighter1.strikes_landed}
              </Center>
            </Td>
            <Th fontSize='sm'>
              <Center>
                Strikes Landed
              </Center>
            </Th>
            <Td isNumeric>
              <Center pl={cellpl} pr={cellpr}>
                {data.fighter2.strikes_landed}
              </Center>
            </Td>
          </Tr>
          <Tr height={rowHeight}>
            <Td>
              <Center pl={cellpl} pr={cellpr}>
                {data.fighter1.strikes_blocked}
              </Center>
            </Td>
            <Th fontSize='sm'>
              <Center>
                Strikes Blocked
              </Center>
            </Th>
            <Td isNumeric>
              <Center pl={cellpl} pr={cellpr}>
                {data.fighter2.strikes_blocked}
              </Center>
            </Td>
          </Tr>
          <Tr height={rowHeight}>
            <Td>
              <Center pl={cellpl} pr={cellpr}>
                {data.fighter1.strikes_blocked}
              </Center>
            </Td>
            <Th fontSize='sm'>
              <Center>
                Strikes Dodged
              </Center>
            </Th>
            <Td isNumeric>
              <Center pl={cellpl} pr={cellpr}>
                {data.fighter2.strikes_blocked}
              </Center>
            </Td>
          </Tr>
          <Tr height={rowHeight}>
            <Td>
              <Center pl={cellpl} pr={cellpr}>
                {data.fighter1.accuracy}
              </Center>
            </Td>
            <Th fontSize='sm'>
              <Center>
                Accuracy
              </Center>
            </Th>
            <Td isNumeric>
              <Center pl={cellpl} pr={cellpr}>
                {data.fighter2.accuracy}
              </Center>
            </Td>
          </Tr>
          <Tr height={rowHeight}>
            <Td>
              <Center pl={cellpl} pr={cellpr}>
                {data.fighter1.speed}
              </Center>
            </Td>
            <Th fontSize='sm'>
              <Center>
                Speed (kph)
              </Center>
            </Th>
            <Td isNumeric>
              <Center pl={cellpl} pr={cellpr}>
                {data.fighter2.speed}
              </Center>
            </Td>
          </Tr>
          <Tr height={rowHeight}>
            <Td>
              <Center>
                {data.fighter1.power}
              </Center>
            </Td>
            <Th fontSize='sm'>
              <Center>
                Power (psi)
              </Center>
            </Th>
            <Td isNumeric>
              <Center>
                {data.fighter2.power}
              </Center>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default FightStatTable;