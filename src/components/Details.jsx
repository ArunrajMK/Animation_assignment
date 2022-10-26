import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    List,
    ListItem,
  } from '@chakra-ui/react';



import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getDetail } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';



export default function Details() {

   const dispatch = useDispatch()
    const {id} = useParams()
   const data = useSelector((store)=>store.data.details.data)||[]
    
   
  
   
    
    
    useEffect(()=>{
     
        dispatch(getDetail(id))
      
      
    },[dispatch,id])
    

console.log("image",)

    return (
      <>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={"data.title"}
            
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
              // src={data.images.jpg.image_url}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Title: {data.title} 
              </Heading>
              <Text
                // color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                Year: {data.year} 
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                //   borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
              
              
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                //   color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                 speciality
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Type</ListItem>
                    <ListItem>Rank</ListItem>{' '}
                    <ListItem>Season</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>{data.type}</ListItem>
                    <ListItem>{data.rank}</ListItem>
                    <ListItem>{data.season}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                //   color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Other Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Popularity:
                    </Text>{' '}
                    {data.popularity} 
                  </ListItem>
                  <ListItem>
                 
                  </ListItem>
                  <ListItem>
                 
                  </ListItem>
                 
                
                </List>
              </Box>
            </Stack>
  
            
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
             
            
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box  marginTop="30px">
      <Button
             width={"300px"}
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              bg={"black"}
              color={"white"}
              py={'7'}
             marginBottom="20px"
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }} >
             <Link to="/" >Back to Home Page</Link>
            </Button>
      </Box>
    
      </>
    );
  }









































