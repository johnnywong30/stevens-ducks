import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Box, Heading, Text, Stack, HStack, VStack, Image } from '@chakra-ui/react'
import Notion from "services/notion/";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

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
  const dispatch = useDispatch()
    
  useEffect(() => {
      dispatch(Notion.getRoster())
  }, [])
  
  const { roster } = useSelector(({ roster }) => roster )
  // TODO: map the data out
  // roster is the data, now map it so we can populate the table with the data
  // read this reference for how to do that: https://reactjs.org/docs/lists-and-keys.html
  const table = (
      <TableContainer>
          <Table variant='simple' colorScheme='red'>
              <TableCaption>Stevens Ultimate - Contact Us</TableCaption>
              <Thead>
                  <Tr>
                      <Th>Name</Th>
                      <Th>Role</Th>
                      <Th>Year</Th>
                      <Th>Major</Th>
                      <Th>Description</Th>
                  </Tr>
              </Thead>
              <Tbody>
                  {roster.filter(function(tempPerson) {

                if(tempPerson.personRole === "Player")
                    return false;
                return true;

            }).map((person) => 
                      <Tr>
                          <Td>{person.personName}</Td>
                          <Td>{person.personRole}</Td>
                          <Td>{person.personYear}</Td>
                          <Td>{person.personMajor}</Td>
                          <Td>{person.personDesc}</Td>
                      </Tr>
                  )} 
              </Tbody>
          </Table>
      </TableContainer>
  );
  return (
      <>
          {table}
      </>
  )
}
  
    // <Stack spacing={8} direction='row'>
    //   <Feature
    //       title='Senior Captain'
    //       name='Johnny Wong'
    //       desc='Captain of 2 years... This man is insane. No Ribs, No problems.'
    //       img='assets\players\johnnykiss.JPG'
    //   />
    //   <Feature
    //       title='Senior Captain'
    //       name='Dylan Regan'        
    //       desc='Willing to prove himself on the first year of his job. This man is 7 feet tall and willing to kill it'
    //       img=''
    //   />
    //   <Feature
    //       title='Junior Captain'
    //       name='Kai Durmas'
    //       desc='Going st'
    //       img=''
    //   />
    //   <Feature
    //       title='President'
    //       name='Kevin "Kiwi" Perez'
    //       desc='Going st'
    //       img=''
    //   />
    //   <Feature
    //       title='Junior Captain'
    //       name='Kai Durmas'
    //       desc='Going st'
    //       img=''
    //   />
    //   <Feature
    //       title='Junior Captain'
    //       name='Kai Durmas'
    //       desc='Going st'
    //       img=''
    //   />
    // </Stack>
// )}
export default StackEx;
