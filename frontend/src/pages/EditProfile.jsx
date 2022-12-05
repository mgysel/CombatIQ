import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertTitle,
  AlertDescription,
  CloseButton,
  AlertIcon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import API from "../helpers/api";
import ImageUpload from '../components/images/ImageUpload';

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [hand, setHand] = useState("");
  const [weightClass, setWeightClass] = useState("");
  const [club, setClub] = useState("");
  const [image, setImage] = useState("");
  const [alertStatus, setAlertStatus] = useState("error");
  const [alertDisplay, setAlertDisplay] = useState("none");
  const [alertMessage, setAlertMessage] = useState("");

  // Get a users profile details
  useEffect(() => {
    API.getPath("user/profile")
      .then((json) => {
        setFirstName(json.data.user.first_name);
        setLastName(json.data.user.last_name);
        setEmail(json.data.user.email);
        setGender(json.data.user.gender);
        setAge(json.data.user.age);
        setHeight(json.data.user.height);
        setWeight(json.data.user.weight);
        setHand(json.data.user.hand);
        setWeightClass(json.data.user.weight_class);
        setClub(json.data.user.club);
        setImage(json.data.user.image);
      })
      .catch((err) => {
        console.warn(`Error: ${err}`);
      });
  }, []);

  // Handle form submission of profile details change
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic error handling
    if (firstName === "" || lastName === "" || email === "") {
      setAlertDisplay("flex");
      setAlertStatus("error");
      setAlertMessage("Please enter all fields");
      return;
    }
    const payload = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      age: age,
      height: height,
      weight: weight,
      hand: hand,
      weight_class: weightClass,
      club: club,
      image: image,
    };
    API.putPath("user/profile/editUser", payload)
      .then((json) => {
        setAlertDisplay("flex");
        setAlertStatus("success");
        setAlertMessage(json.message);
      })
      .catch((err) => {
        if (err instanceof TypeError) {
          setAlertDisplay("flex");
          setAlertStatus("error");
          setAlertMessage("Didn't receive response from backend");
          return;
        }
        err.json().then((json) => {
          setAlertDisplay("flex");
          setAlertStatus("error");
          setAlertMessage(json.message);
        });
      });
  };

  return (
    <Box 
      p='20px' pt='10px'
      ml='25vw' mr='25vw' mt='20px' mb='40px'
      borderWidth='1px' borderRadius='lg' overflow='hidden' 
    >
      <Heading as="h1" size="xl" mb='10px'>
        Edit Profile
      </Heading>
      <Alert status={alertStatus} my="1rem" display={alertDisplay}>
        <AlertIcon />
        <AlertTitle mr={2}>
          {alertStatus === "error" ? "Error" : "Success"}
        </AlertTitle>
        <AlertDescription>{alertMessage}</AlertDescription>
        <CloseButton
          onClick={() => {
            setAlertDisplay("none");
          }}
          position="absolute"
          right="8px"
          top="8px"
        />
      </Alert>
      <form onSubmit={handleSubmit}>
        <FormControl>
            <FormLabel>Image</FormLabel>
            <ImageUpload image={image} setImage={setImage} />
          </FormControl>
        <FormControl my="1rem" id="edit-email">
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl my="1rem" id="edit-first-name">
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </FormControl>
        <FormControl my="1rem" id="edit-last-name">
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </FormControl>
        <FormControl my="1rem" id="edit-gender">
          <FormLabel>Gender</FormLabel>
          <Input
            type="text"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </FormControl>
        <FormControl my="1rem" id="edit-age">
          <FormLabel>Age</FormLabel>
          <Input
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </FormControl>
        <FormControl my="1rem" id="edit-height">
          <FormLabel>Height (m)</FormLabel>
          <NumberInput defaultValue={height} onChange={(e) => {
              setHeight(e.target.value);
            }}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl my="1rem" id="edit-weight">
          <FormLabel>Weight (kg)</FormLabel>
          <NumberInput defaultValue={weight} onChange={(e) => {
              setWeight(e.target.value);
            }}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl my="1rem" id="edit-hand">
          <FormLabel>Hand</FormLabel>
            <RadioGroup onChange={(e) => setHand(e.target.value)} value={hand}>
            <Stack direction='row'>
              <Radio ml='5px' mr='10px' value='right'>Right</Radio>
              <Radio value='left'>Left</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl my="1rem" id="edit-weightClass">
          <FormLabel>Weight Class</FormLabel>
          <Select placeholder='Select option' defaultValue={weightClass} onChange={(e) => {
              setWeightClass(e.target.value);
            }}>
            <option value='Minimumweight (48kg)'>Minimumweight (48kg)</option>
            <option value='Light Flyweight (49kg)'>Light Flyweight (49kg)</option>
            <option value='Flyweight (51 kg)'>Flyweight (51 kg)</option>
            <option value='Super Flyweight (52 kg)'>Super Flyweight (52 kg)</option>
            <option value='Bantamweight (53.5 kg)'>Bantamweight (53.5 kg)</option>
            <option value='Super Bantamweight (55 kg)'>Super Bantamweight (55 kg)</option>
            <option value='Featherweight (57 kg)'>Featherweight (57 kg)</option>
            <option value='Super Featherweight (59 kg)'>Super Featherweight (59 kg)</option>
            <option value='Lightweight (61 kg)'>Lightweight (61 kg)</option>
            <option value='Super Lightweight (63.5 kg)'>Super Lightweight (63.5 kg)</option>
            <option value='Welterweight (67 kg)'>Welterweight (67 kg)</option>
            <option value='Super Welterweight (70 kg)'>Super Welterweight (70 kg)</option>
            <option value='Middleweight (72.5 kg)'>Middleweight (72.5 kg)</option>
            <option value='Super Middleweight (76 kg)'>Super Middleweight (76 kg)</option>
            <option value='Light Heavyweight (79 kg)'>Light Heavyweight (79 kg)</option>
            <option value='Cruiserweight (91 kg)'>Cruiserweight (91 kg)</option>
            <option value='Heavyweight (unlimited)'>Heavyweight (unlimited)</option>
          </Select>
        </FormControl>
        <FormControl my="1rem" id="edit-club">
          <FormLabel>Club</FormLabel>
          <Input
            type="text"
            value={club}
            onChange={(e) => {
              setClub(e.target.value);
            }}
          />
        </FormControl>
        <Button my="1rem" colorScheme="teal" type="submit">
          Save Changes
        </Button>
      </form>
    </Box>
  );
};

export default EditProfile;
