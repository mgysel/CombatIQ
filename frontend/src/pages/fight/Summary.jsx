import React from "react";
import { 
  Box, 
  Heading, 
  HStack,
  Image, 
  Text, 
  LinkBox, 
  LinkOverlay,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import RingProgress from "../../components/visualisations/RingProgress";
import AntBidirectional from "../../components/visualisations/AntBidirectional";
import MultiLine from "../../components/visualisations/MultiLine";

{/* <Image 
boxSize='100px'
src='https://img.bleacherreport.net/img/images/photos/002/098/618/AP11111909790_crop_exact.jpg?w=1200&h=1200&q=75' alt='Dan Abramov' />
<Stack spacing={2}>
<Text fontSize='2xl'>Wanderlei Silva</Text>
<Text fontSize='l'>Brazilian American, Male</Text>
<Text fontSize='l'>age (3 July 1976)</Text>
<Text fontSize='l'>180 cm, 220 lb (%muscle, %fat, %water)</Text>
<Text fontSize='l'>Team: Chute Boxe Academy</Text>
</Stack>
</Stack>
<StatGroup pt='50px'>
<Stat>
<StatLabel>Number of Fight</StatLabel>
<StatNumber>49</StatNumber>
<StatHelpText>
  <StatArrow type='increase' />
  23.36%
</StatHelpText>
</Stat>
<Stat>
<StatLabel>Wins</StatLabel>
<StatNumber>35</StatNumber>
<StatHelpText>
  <StatArrow type='decrease' />
  19.05%
</StatHelpText>
</Stat>
<Stat>
<StatLabel>Losses</StatLabel>
<StatNumber>14</StatNumber>
<StatHelpText>
  <StatArrow type='increase' />
  30.00%
</StatHelpText>
</Stat>
</StatGroup>
<AntBidirectional /> */}

const Summary = (props) => {
  return (
    <VStack>
      <AntBidirectional 
        fighter1={props.fighter1}
        fighter2={props.fighter2}
      />
    </VStack>
  );
};

export default Summary;
