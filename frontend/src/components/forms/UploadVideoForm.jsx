import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Grid,
  Heading,
  Input,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  VStack,
} from "@chakra-ui/react";
import VideoInput from '../../components/video/VideoInput.jsx'

const UploadVideoForm = () => {

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [opponent, setOpponent] = useState('')

  return (
    <Flex w="100%" maxW="1366px" p="1rem" direction="column">
      <VideoInput width={400} height={300} />
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Date</FormLabel>
        <Input type='datetime-local' value={date} onChange={(e) => setDate(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Opponent</FormLabel>
        <Input type='text' value={opponent} onChange={(e) => setOpponent(e.target.value)} />
      </FormControl>
      <Button colorScheme='teal' size='lg'>
        Submit
      </Button>
    </Flex>
  );
};

export default UploadVideoForm;