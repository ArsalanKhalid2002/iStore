import React from 'react';
import { Button, Container, HStack, Flex, Text, useColorMode } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'; // Ensure you import Link from react-router-dom

const Navbar = () => {
    const { colorMode, toggleColorMode}= useColorMode();
  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        alignItems={"center"}
        h={16}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"} // Corrected to camel-case
          textTransform={"uppercase"}
          textAlign={"center"} // Corrected to camel-case
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>  {/* Corrected Link usage */}
        </Text>
        <HStack spacing={2} alignContent={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === 'dark' ? '🌞' : '🌙'}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
