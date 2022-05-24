import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Box, Heading, Badge, Text, Stack, HStack, VStack, Image } from '@chakra-ui/react'
import Notion from "services/notion/";
import '../../../css/cards.css'

function Feature({ title, name, desc, year, img, major, ...rest }) {
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={img} alt={name} fallbackSrc='https://via.placeholder.com/150'/>
        <Box p='6'>
            <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    {title}
                </Badge>
                <Box 
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                >
                    {year}
                </Box>
            </Box>
            <Box 
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
             >
                {name}
            </Box>
            <Box>
                {desc}
            </Box>
        </Box>
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
    <>
            {roster.filter(function(tempPerson) {

                if(tempPerson.personRole === "Player")
                    return false;
                return true;

            }).map((person) => 
                      <Feature  name = {person.personName}
                                title = {person.personRole}
                                year = {person.personYear}
                                major = {person.personMajor}
                                desc = {person.personDesc}>
                      </Feature>
                  )} 
      </>
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
