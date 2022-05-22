import React from "react";
import { SimpleGrid, Grid, GridItem, Box } from "@chakra-ui/react";

import '../../../css/home.css'
import AboutUs from "./AboutUs";
import Highlights from "./Highlights";
import TeamPictures from "./TeamPictures";
import PracticeInfo from "./PracticeInfo";


const Home = () => {
    return (
        <SimpleGrid className={'home-grid'} minChildWidth={{base: '100%', md: '400px'}} spacing='15px'>
            {/* TODO: work on these responsive section heights */}
            <Box height={{base: '90vh', md: '100vh'}}>
                <AboutUs />
            </Box>
            <Box height={{base: '90vh', md: '100vh'}}>
                <Highlights />
            </Box>
            <Box height={{base: '120vh', sm: '80vh', smd: '75vh', md: '75vh'}}>
                <PracticeInfo />
            </Box>
            <Box height={{base: '50vh', xs:'45vh', sm: '50vh', smd: '70vh', md: '75vh'}}>
                <TeamPictures />
            </Box>
            <Box bg='tomato' height={{base: '90vh', md: '75vh'}}>
                Links
            </Box>
            <Box bg='tomato' height={{base: '90vh', md: '75vh'}}>
                Important Links (Signups, Dues, Contact)
            </Box>
        </SimpleGrid>
    )
}

export default Home