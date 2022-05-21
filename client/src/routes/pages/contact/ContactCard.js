import React from "react";
import { Box, Heading, Text, Stack, HStack, VStack, Image } from '@chakra-ui/react'

function Feature({ title, name, desc, img, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Image src={img} alt={name} fallbackSrc='https://via.placeholder.com/150'/>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }
  
function StackEx() {
return (
    <Stack spacing={8} direction='row'>
      <Feature
          title='Senior Captain'
          name='Johnny Wong'
          desc='Captain of 2 years... This man is insane. No Ribs, No problems.'
          img='assets\players\johnnykiss.JPG'
      />
      <Feature
          title='Senior Captain'
          name='Dylan Regan'        
          desc='Willing to prove himself on the first year of his job. This man is 7 feet tall and willing to kill it'
          img=''
      />
      <Feature
          title='Junior Captain'
          name='Kai Durmas'
          desc='Going st'
          img=''
      />
      <Feature
          title='President'
          name='Kevin "Kiwi" Perez'
          desc='Going st'
          img=''
      />
      <Feature
          title='Junior Captain'
          name='Kai Durmas'
          desc='Going st'
          img=''
      />
      <Feature
          title='Junior Captain'
          name='Kai Durmas'
          desc='Going st'
          img=''
      />
    </Stack>
)
}
export default StackEx;
