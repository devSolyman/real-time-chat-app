// ChatCard.js

import React from 'react';
import { Box, Flex, Avatar, Button } from '@chakra-ui/react';

const ChatCard = ({ name, message, onClick }) => {
  return (
    <Box>
      <Flex align="center" justifyContent="space-between" marginBottom={5} >
          <h1>New chat app</h1>
          <Button mt="2" size="sm" onClick={onClick}>Add new Chat Group+</Button>
      </Flex>
    <Box p="3" borderWidth="1px" borderRadius="lg" mb="2">
      <Flex align="center">
        <Avatar size="sm" name={name} src="avatar.jpg" />
        <Box ml="2">
          <Box fontWeight="semibold">{name}</Box>
          <Box fontSize="sm" color="gray.600">{message}</Box>
        </Box>
      </Flex>
      <Button mt="2" size="sm" onClick={onClick}>+</Button>
    </Box>
    </Box>
  );
};

export default ChatCard;
