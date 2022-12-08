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
import API from "../../helpers/api";
import VideoInput from '../../components/video/VideoInput.jsx'

const UploadVideoModal = (props, children, ...rest ) => {
  const btnRef = React.useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [videoFile, setVideoFile] = useState(null)
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const pt = '20px'

  const handleUpload = (e) => {
    console.log("HANDLE UPLOAD")
    console.log('Title: ', title)
    console.log('Date: ', date)
    console.log('Description: ', description)
    console.log(videoFile)

    e.preventDefault();
    
    const data = new FormData();
    data.append('file', videoFile);
    data.append('filename', videoFile.value);

    fetch('http://localhost:2120/training/upload', { method: 'POST', body: data })
    .then((response) => { response.json().then((body) => { 
        this.setState({ imageURL: `http://localhost:2120/${body.file}` });
      });
    });
  }

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>{props.button_text}</Button>
      <Modal
        variant="alwaysOpen"
        {...rest}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={true}
        blockScrollOnMount={false}
        trapFocus={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload New Fight</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody pb={6}>
            <VideoInput width={400} height={300} setVideoFile={setVideoFile} />
            <FormControl pt={pt}>
              <FormLabel fontWeight={'bold'}>Title</FormLabel>
              <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl pt={pt}>
              <FormLabel fontWeight={'bold'}>Date</FormLabel>
              <Input type='datetime-local' value={date} onChange={(e) => setDate(e.target.value)} />
            </FormControl>
            <FormControl pt={pt}>
              <FormLabel fontWeight={'bold'}>Description</FormLabel>
              <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleUpload}>
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