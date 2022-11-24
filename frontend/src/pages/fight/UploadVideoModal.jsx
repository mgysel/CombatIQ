import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,

} from "@chakra-ui/react";
import VideoInput from '../../components/video/VideoInput.jsx'

const UploadVideoModal = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [opponent, setOpponent] = useState('')

  const pt = '20px'

  return (
    <>
      <Button onClick={onOpen}>{props.button_text}</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload New Fight</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody pb={6}>
            <VideoInput width={400} height={300} />
            <FormControl pt={pt}>
              <FormLabel fontWeight={'bold'}>Title</FormLabel>
              <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl pt={pt}>
              <FormLabel fontWeight={'bold'}>Date</FormLabel>
              <Input type='datetime-local' value={date} onChange={(e) => setDate(e.target.value)} />
            </FormControl>
            <FormControl pt={pt}>
              <FormLabel fontWeight={'bold'}>Opponent</FormLabel>
              <Input type='text' value={opponent} onChange={(e) => setOpponent(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Upload
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UploadVideoModal;