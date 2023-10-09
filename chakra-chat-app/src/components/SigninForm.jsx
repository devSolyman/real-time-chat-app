import React, { useState } from 'react';
import { useToast } from "@chakra-ui/react";
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  FormErrorMessage,
  Toast,
} from '@chakra-ui/react';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history=useHistory()

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    if( !email || !password){
      toast({
        title: "Please input correct email and password",
        description: "this is the unauthenticationn error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false)
      return
    }
    try {
      const config={
        headers:{
          "Content-type":"application/json",
        },
      }
      const {data}=await axios.post(
        "http://localhost:3001/api/user/login",
        {email,password,},
        config
      );
      toast({
        title: "Login success fully",
        status:"success",
        duration: 5000,
        isClosable: true,
      });
      localStorage.setItem('userInfo',JSON.stringify(data));
    
      setLoading(false)
      history.push('/chats')
    } catch (error) {
      toast({
        title: "Login faild",
        status:"error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false)
    }
  };
  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" p={6} boxShadow="lg">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isInvalid={email === ''}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormErrorMessage>Email is required</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={password === ''}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormErrorMessage>Password is required</FormErrorMessage>
          </FormControl>

          <Button colorScheme="teal" type="submit" isLoading={loading}>
            Signin
          </Button>
          <Button colorScheme="gray" type="submit" isLoading={loading}
          
          onClick={()=>{
            setEmail("guest@example.com");
            setPassword("1234")
          }}
          
          >
            Get Duest User Credentials
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SigninForm;
