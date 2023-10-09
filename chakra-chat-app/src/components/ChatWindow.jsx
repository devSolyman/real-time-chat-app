import React, { useState } from 'react';
import { Box, Flex, Input, Button } from '@chakra-ui/react';

const ChatWindow = ({ title }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: Date.now(), text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  return (
    <Flex direction="column" height="100%" borderWidth="1px" borderRadius="lg" p="4" bg="white" m="2" flex="1">
      <Box mb="4" fontWeight="bold" textAlign="center" borderBottomWidth="1px" pb="2">
        {title}
      </Box>
      <Box flex="1" overflowY="scroll">
        {messages.map((message) => (
          <Box key={message.id} mb="2" textAlign={message.sender === 'You' ? 'right' : 'left'}>
            <Box display="inline-block" p="2" bg={message.sender === 'You' ? 'teal.500' : 'gray.100'} borderRadius="md">
              {message.text}
            </Box>
          </Box>
        ))}
      </Box>
      <Flex>
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          mr="2"
        />
        <Button onClick={handleSend} colorScheme="teal">
          Send
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChatWindow;
