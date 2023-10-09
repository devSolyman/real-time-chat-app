import React, { useState } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import SignupForm from '../SignupForm';
import SigninForm from '../SigninForm';
import Navbar from '../NavBar';

const AuthTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box>
      <Navbar/>
  
    <Box
      maxW="md"
      mx="auto"
      p={4}
      bg="#fff"          // Set background color to black
      borderRadius="lg"
      boxShadow="lg"
      borderWidth="2px"
      borderColor="white" // Set border color to white
      minHeight="400px"
    >
      <Tabs
        isLazy
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
        variant="enclosed"
        colorScheme="green"
      >
        <TabList justifyContent="center">
          <Tab _focus={{ boxShadow: 'none' }}>Signup</Tab>
          <Tab _focus={{ boxShadow: 'none' }}>Signin</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SignupForm />
          </TabPanel>
          <TabPanel>
            <SigninForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
    </Box>
  );
};

export default AuthTabs;
