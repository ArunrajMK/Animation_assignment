import React from 'react'
import {
    Badge,
    Button,
    Center,
    Flex,
    Grid,
    Heading,
    Image,
    Stack,
    Text,
    
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



function WatchList() {

    let data = JSON.parse(localStorage.getItem("check"))||[]


  return (
    <>

  
  
<Grid marginLeft={"50px"}  templateColumns='repeat(2, 1fr)' gap={6}>
    {data.map((elem)=>(
    <Center key={elem.mal_id} py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={elem.images.jpg.image_url}
             alt={elem.title}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'} color="white">
          {elem.title}
          </Heading>
          <Text fontWeight={600}  size="sm" mb={4} color="white">
           Rating: {elem.score}
          </Text>
         
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
           
         
          
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
            
              _focus={{
                bg: 'blue.500',
              }}
              >
              Add to Watch List
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
     ))}
     </Grid>
  <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'blue.500',
          }}
          _focus={{
            bg: 'blue.500',
          }} >
         <Link to="/">Back to home Page</Link>
        </Button>
  </>
);
}

export default WatchList