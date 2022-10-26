
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/action'
import {
    Badge,
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Heading,
    Image,
    Input,
    Select,
    Stack,
    Text,
    
  } from '@chakra-ui/react';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import DropComp from './DropComp';
import {useDrop} from "react-dnd"
// import {useDrag} from "react-dnd"

function Anime() {

// let list = JSON.parse(localStorage.getItem("check"))||[]
let list = JSON.parse(localStorage.getItem("check"))||[]

const dispatch = useDispatch()
const [favourite, setFavourite] = useState("")
const data = useSelector((store)=>store.data.data.data)||[]
const [query, setQuery] = useState("")
const [page, setPage] = useState(1)



const [board, setBoard] = useState([])
const [{isOver},drop] = useDrop(()=>({
accept:"image",
drop:(item)=>addImageToBoard(item.id),
collect:(monitor)=>({
    isOver:!! monitor.isOver(),
})

}))

const addImageToBoard = (id)=>{
    const pictureList = data.filter((item)=>id===item.mal_id)
    // setBoard((board)=>[...board,pictureList[0]])
    console.log("checkkk",pictureList)
    if(pictureList[0]!==undefined){
        localStorage.setItem("check",JSON.stringify([...list,pictureList[0]]));
    }
    
}








const filterFun = (e)=>{
let filter = (e.target.value)
if(filter){
    dispatch(getData(filter,page))
}
dispatch(getData(filter,page))
}




useEffect(()=>{
    if(query){
        dispatch(getData(query,page))
    }
    dispatch(getData(query,page))
},[dispatch,query,page])


console.log("data",data)

useEffect(()=>{
    if(favourite){
        
        list.push(favourite)
        localStorage.setItem("check",JSON.stringify(list));
        setFavourite("")
    
    }
    },[favourite,list])




return (
    <>
    <Input onChange={(e)=>setQuery(e.target.value)} width="300px" color="white" bg={"red.100"} placeholder='Search here'/>
    
    <Box marginTop="20px" marginBottom="20px"><Pagination currentPage={page}  lastPage={9} onPageChange={setPage} /></Box>
    <Button onClick={()=>setPage(page-1)} bg={"blue.100"} >Prev</Button> <Button bg={"blue.100"} onClick={()=>setPage(page+1)}>Next</Button>
    <Box>
    <Select placeholder='Select Type' marginTop="20px" marginLeft="38%" width="300px" onChange={(e)=>filterFun(e)}>
    <option value='TV'>TV</option>
    <option value='Movie'>Movie</option>
    </Select>
    <Text color={"brown"} fontSize={"30px"} fontWeight={"L"}>Watch List</Text>
    <Grid boxShadow={"dark-lg"} marginLeft={"8px"} marginRight={"8px"} templateColumns='repeat(20, 1fr)' gap={"2px"} height={"100px"}  ref={drop}  >
    {list.map((elem)=>(
        <Image 
        src={elem.images.jpg.image_url}
         alt={"name"}
        key={elem.mal_id} 
         height="98px" width={"100px"} />
        // <DropComp 
        //   src={elem.images.jpg.image_url}
        //   alt={elem.title}
        //   id={elem.mal_id} />
    ))}

    </Grid>
    
    </Box>
    <Flex>
      <Grid marginLeft={"50px"}  templateColumns='repeat(2, 1fr)' gap={6}>
       


<Flex>

   
<Grid marginLeft={"50px"}  templateColumns='repeat(2, 1fr)' gap={6}>
    {data.map((elem)=>(
        <>
  
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
          {/* <Image
            objectFit="cover"
            boxSize="100%"
            src={elem.images.jpg.image_url}
             alt={elem.title}
          /> */}
          <DropComp 
        //    ref={drag}
          src={elem.images.jpg.image_url}
          alt={elem.title}
          id={elem.mal_id} />
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
              }}
              onClick={()=>localStorage.setItem("details",JSON.stringify(elem.url))}
              >
              <Link to={`/details/${elem.mal_id}`}>Details</Link>
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              width="200px"
              bg={'blue.400'}
              color={'white'}
             
              _hover={{
                bg: 'blue.500',
              }}
              onClick={()=>setFavourite(elem)}
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
    </>
     ))}
</Grid> 
 {/* <Grid border={"1px solid black"} templateRows="repeat(30, 1fr)" gap="2px" width={"100px"} ref={drop}>
 {board.map((elem)=>(
        <Image src={elem.images.jpg.image_url}
         alt={elem.title}
        key={elem.mal_id} 
         height="98px" width={"100px"} />
    ))}
</Grid> */}

</Flex>

   
     </Grid>
     </Flex>
    </>
  );


}

export default Anime