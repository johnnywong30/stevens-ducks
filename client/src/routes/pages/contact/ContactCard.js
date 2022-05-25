import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Box, Heading, Badge, Text, Stack, HStack, VStack, Image, Grid, GridItem } from '@chakra-ui/react'
import Notion from "services/notion/";
import '../../../css/cards.css'

function Feature({ title, name, desc, year, img, major, ...rest }) {
    return (
      <Box maxW = "md" borderWidth='1px' borderRadius='lg' overflow='hidden'>
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
  const captains = (
    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
            {roster.filter(function(tempPerson) {

                if(tempPerson.personRole === "Captain")
                    return true;
                return false;

            }).map((person) => 
                      <Feature  name = {person.personName}
                                title = {person.personRole}
                                year = {person.personYear}
                                major = {person.personMajor}
                                desc = {person.personDesc}
                                img = {person.personImage}>
                      </Feature>
                  )} 
      </Grid>
  );

  const board = (
    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
            {roster.filter(function(tempPerson) {

                if(tempPerson.personRole !== "Player" && tempPerson.personRole !== "Captain")
                    return true;
                return false;

            }).map((person) => 
                      <Feature  name = {person.personName}
                                title = {person.personRole}
                                year = {person.personYear}
                                major = {person.personMajor}
                                desc = {person.personDesc}
                                img = {person.personImage}>
                      </Feature>
                  )} 
      </Grid>
  );

  return (
      <>
        <Heading as='h3' size='xl' align={"center"}>Captains</Heading>
          {captains}
        <Heading as='h3' size='xl' align={"center"}>Official Board</Heading>
          {board}
      </>
  )
}
export default StackEx;
