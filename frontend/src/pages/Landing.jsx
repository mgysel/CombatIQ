import React, { useEffect, useState, useContext } from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm.jsx";
import SignupForm from "../components/auth/SignupForm.jsx";

const Landing = () => {
  const [display, setDisplay] = React.useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden'

  }, [])

  return (
    <div style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + 'images/bg4.jpg'})`, 
      backgroundRepeat: 'no-repeat',
      backgroundSize: '125% 125%',
      backgroundPositionX: '-350px',
      backgroundPositionY: '-100px',
      mr:'150px',
      width: '100vw',
      height: '100vh'
    }}>
      <Flex
        w="100%"
        maxW="1366px"
        p="1rem"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
      <Heading as="h1" my="1rem" fontSize="4.5em" mt="10px" color='white'>
        Welcome to Combat IQ
      </Heading>
      <Flex justifyContent="space-between" w="100%" maxW="28rem" mt="40px">
        {
          display===0 &&
          <>
            <LoginForm setDisplay={setDisplay} />
          </>
        }
        {
          display===1 &&
          <>
            <SignupForm setDisplay={setDisplay} />
          </>
        }
      </Flex>
    </Flex>
    </div>
  );
};

export default Landing;
