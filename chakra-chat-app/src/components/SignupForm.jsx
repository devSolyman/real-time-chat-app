import React, { useState, useRef } from 'react';
import { useToast } from "@chakra-ui/react";
import axios from 'axios'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  FormErrorMessage,
  Image,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading,setLoading]=useState(false)
  const history=useHistory()

  const emailRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();
  const fileRef = useRef();

  const toast = useToast();
  console.log(selectedImage);
  const handleImageChange = (e) => {
    setLoading(true);
    if (e === undefined) {
      toast({
        title: "Error",
        description: "No image selected",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false); 
      return;
    }

  if(e.type==="image/jpeg" || e.type==="image/png"){
    const data= new FormData();
  

    data.append('file',e)
    data.append("upload_preset","new-chat-app");
    data.append('cloud_name','dmvmnvbw0');
    fetch('https://api.cloudinary.com/v1_1/dmvmnvbw0/image/upload',{
      method:"post",
      body:data
    }).then((res)=>res.json()).then(data=>{
      setSelectedImage(data.url.toString());
      setLoading(false)
    }).catch((e)=>{
      setLoading(false);
      console.log(e);
    })

  }else{
    toast({
      title: "Error",
      description: "last erro",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
 
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    if(!name || !email || !password){
      toast({
        title: "Please fill your form",
        description: "this is error is validation error",
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
        "http://localhost:3001/api/user",
        {name,email,password,selectedImage},
        config
      );
      toast({
        title: "Registration Successful",
        status:"success",
        duration: 5000,
        isClosable: true,
      });
      localStorage.setItem('userInfo',JSON.stringify(data));
    
      setLoading(false)
      history.push('/chats')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" p={6} boxShadow="lg">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isInvalid={name === ''}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
            />
            <FormErrorMessage>Name is required</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={email === ''}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
            />
            <FormErrorMessage>Email is required</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={password === ''}>
            <FormLabel>Password</FormLabel>
            <Input
              type="tel"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={phoneRef}
            />
            <FormErrorMessage>Password is required</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Upload Image</FormLabel>
            <Input
              type="file"
              accept="image/*"
              onChange={(e)=>handleImageChange(e.target.files[0])}
              ref={fileRef}
            />
          </FormControl>
          {previewUrl && <Image src={previewUrl} alt="Uploaded" boxSize="150px" objectFit="cover" />}
          <Button colorScheme="teal" type="submit" isLoading={loading}>
            Signup
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SignupForm;
