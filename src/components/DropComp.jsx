import {
    Badge,
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Heading,
    Image,
    Stack,
    Text,
    
  } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {useDrag} from "react-dnd"

function DropComp({src,alt,id}) {

    const [{isDragging}, drag] = useDrag(()=>({
        type:"image",
        item:{id:id},
        collect:(monitor)=>({
            isDragging:!! monitor.isDragging(),
        }),
    }))



    return (
    <Image
    ref={drag}
    key={id}
    objectFit="cover"
    boxSize="100%"
    src={src}
     alt={alt}
  />
    )
}

export default DropComp
