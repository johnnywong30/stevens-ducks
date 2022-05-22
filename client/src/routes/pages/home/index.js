import React from "react";
import { SimpleGrid, Grid, GridItem, Box } from "@chakra-ui/react";

import '../../../css/home.css'
import AboutUs from "./AboutUs";
import Highlights from "./Highlights";
import TeamPictures from "./TeamPictures";
import PracticeInfo from "./PracticeInfo";
import Links from "./Links";


const Home = () => {
    return (
        <SimpleGrid className={'home-grid'} minChildWidth={{base: '100%', md: '400px'}} spacing='15px'>
            {/* TODO: work on these responsive section heights */}
            <Box height={{base: '85vh', xs: '100vh'}}>
                <AboutUs />
            </Box>
            <Box height={{base: '70vh', xs: '75vh', sm: '100vh'}}>
                <Highlights />
            </Box>
            <Box height={{base: '100%'}}>
                <PracticeInfo />
            </Box>
            <Box height={{base: '100%'}}>
                <TeamPictures />
            </Box>
            <Box height={{base: 'calc(100% + 50px)'}}>
                <Links />
            </Box>
            <Box bg='tomato' height={{base: '90vh', md: '75vh'}}>
                Important Links (Signups, Dues, Contact)
            </Box>
        </SimpleGrid>
    )
}

export default Home