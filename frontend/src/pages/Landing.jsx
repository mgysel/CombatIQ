import React, { useState, useContext } from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm.jsx";
import SignupForm from "../components/auth/SignupForm.jsx";

const Landing = () => {
  const [display, setDisplay] = React.useState(0)

  return (
    <Flex
      w="100%"
      maxW="1366px"
      p="1rem"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Heading as="h1" my="1rem" fontSize="4.5em" mt="16%">
        Welcome to Combat IQ
      </Heading>
      <Flex justifyContent="space-between" w="100%" maxW="28rem" mt="3rem">
        {display===0 &&
        <>
          <Button
            w="10rem"
            h="4rem"
            colorScheme="teal"
            size="lg"
            fontSize="1.5em"
            onClick={() => {
              setDisplay(1);
            }}
          >
            Login
          </Button>
          <Button
            w="10rem"
            h="4rem"
            colorScheme="teal"
            size="lg"
            fontSize="1.5em"
            onClick={() => {
              setDisplay(2);
            }}
          >
            Signup
          </Button>
        </>
        }
        {
          display===1 &&
          <>
            <LoginForm />
          </>
        }
        {
          display===2 &&
          <>
            <SignupForm />
          </>
        }
      </Flex>
    </Flex>
  );
};

export default Landing;
