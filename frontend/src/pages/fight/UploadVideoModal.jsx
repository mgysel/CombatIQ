import React, { useContext, useEffect, useState } from "react";
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
import VideoInput from '../../components/video/VideoInput.jsx';
import { StoreContext } from "../../helpers/context";

const UploadVideoModal = (props, children, ...rest ) => {
  const context = useContext(StoreContext);
  const userData = context.userData[0];
  const setUserData = context.userData[1];
  
  const btnRef = React.useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const [videoFile, setVideoFile] = useState(null)
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(null)
  const [description, setDescription] = useState('')
  const pt = '20px'

  const handleUpload = (e) => {
    console.log("HANDLE UPLOAD")
    console.log('Title: ', title)
    console.log('Date: ', date)
    console.log('Description: ', description)
    console.log('Video File: ', videoFile)

    // e.preventDefault();

    const data = new FormData()
    data.append("file", videoFile)
    data.append("upload_preset", "ml_default")
    data.append("cloud_name","combat_iq")

    fetch(" https://api.cloudinary.com/v1_1/combatiq/video/upload", {
      method:"post",
      body: data
    }).then(resp => resp.json())
      .then(data => {
      // setUrl(data.url)
      console.log("data: ", data)
      console.log("public id: ", data.public_id)
      
      const details = {
      user_id: userData._id,
      title: title,
      date: date,
      description: description,
      video: data.public_id
      };
      API.postPath("training/upload", details)
        .then((json) => {
          // history.push("/reset-password");
          console.log("TRAINING UPLOAD RESPONSE JSON: ", json)
        })
        .catch((err) => {
          err.json().then((json) => {
            console.log("TRAINING UPLOAD ERROR JSON: ", json)
          });
        });
    })
    .catch(err => console.log(err)) 
    
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