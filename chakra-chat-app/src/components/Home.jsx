import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./NavBar";

function Home() {
    const myObject = { key: 'value' };

    const testLocalStorge=()=>{
        if(!localStorage){
        localStorage.setItem('myObject', JSON.stringify(myObject));
        console.log('ami check korsi');
    }
     
    }
    const handleClearLocalStorage = () => {
        localStorage.clear();
        
      };
  return (
    <Box>
        <Navbar/>
    <Box p="8" textAlign="center">
      <Heading mb="4">Welcome to My Awesome Website</Heading>
      <Text fontSize="xl" mb="8" >
        Explore amazing features and content.
      </Text>
    
      <Link to='/auth'>
      <Button colorScheme="teal" size="lg">
        Get Started
      </Button>
      </Link>
    </Box>
    </Box>
  );
}

export default Home;
