import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ChatApp from './components/ChatApp';
import Navbar from './components/NavBar';
import AuthTabs from './components/authTabs/AuthTabs';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <>
   
        <Box marginTop={100}>
          <Switch>
            <Route exact path="/">
             <Home/>
            </Route>
            <Route exact path="/auth">
              <AuthTabs />
            </Route>
            <Route path="/chat">
              <ChatApp />
            </Route>
          </Switch>
        </Box>
      </>
    </Router>
  );
}

export default App;
