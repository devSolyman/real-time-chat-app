// ChatApp.js

import React, { useState } from 'react';
import { Grid, GridItem, Flex ,Box} from '@chakra-ui/react';
import ChatCard from './ChatCard';
import ChatWindow from './ChatWindow';

const ChatApp = () => {
  const [chats, setChats] = useState([
    { id: 1, name: 'John Doe', message: 'Hello!' },
    { id: 2, name: 'Jane Doe', message: 'Hi there!' },
  ]);

  const addNewChat = () => {
    setChats([...chats, { id: Date.now(), name: 'New Chat', message: 'Click to chat' }]);
  };

  return (
    <Grid templateColumns="30% 70%" gap={4} p={4}>
      <GridItem>
        {chats.map(chat => (
          <ChatCard
            key={chat.id}
            name={chat.name}
            message={chat.message}
            onClick={addNewChat}
          />
        ))}
      </GridItem>
      <GridItem>
        <Flex justify="center" align="center" h="100vh" background='blackAlpha.800'borderRadius='10px'>
          <Box maxW="500px" >
          <ChatWindow title="Chat with John" />
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default ChatApp;
