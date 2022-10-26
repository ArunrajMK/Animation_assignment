import { Box, Button } from '@chakra-ui/react'
import React from 'react'

function Pagination({currentPage,lastPage,onPageChange}) {
 

const arr = new Array (lastPage).fill(9)


  return (
    <Box>
        {arr.map((item,page)=>
        <Button bg={"teal"} onClick={()=>onPageChange(page+1)}  disabled={(page+1)===currentPage}>{page+1}</Button>
        )}
    </Box>
  )
}

export default Pagination