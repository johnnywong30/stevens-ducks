import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Players = ({ title, name, desc, img, ...rest }) => {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Image src={img} alt={name} fallbackSrc='https://via.placeholder.com/150'/>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
}

export default Players
