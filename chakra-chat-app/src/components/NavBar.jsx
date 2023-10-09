import React, { useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  Link,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="teal.500"
      color="white"
      width="100%"
      zIndex="1000"
      position="fixed"
      top="0"
      left="0"
      right="0"
    >
      <Box className=''>
        <Link href="/" fontSize="xl" fontWeight="bold">
          <img src="/dummy-logo.png" alt="Logo" height="40px" />
        </Link>
      </Box>
      <Spacer />
      <Box display={{ base: 'none', md: 'block' }} marginRight='30px'>
        <Link href="/" mr="4" _hover={{ textDecor: 'underline' }}>
         Home
        </Link>
        <Link href="#" mr="4" _hover={{ textDecor: 'underline' }}>
          Priceing
        </Link>
        <Link href="#" _hover={{ textDecor: 'underline' }}>
          Details
        </Link>
      </Box>
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<span>&#9660;</span>}
            bg="transparent"
            _hover={{ opacity: '0.8' }}
            colorScheme="teal"
            variant="outline"
            color='black'
          >
            Menu
          </MenuButton>
          <MenuList color="teal.500">
            <MenuItem _hover={{ bg: 'teal.100' }}>Profile</MenuItem>
            <MenuItem _hover={{ bg: 'teal.100' }}>Settings</MenuItem>
            <MenuItem _hover={{ bg: 'teal.100' }}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
