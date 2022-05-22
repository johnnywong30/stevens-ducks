import React from "react";
import { SimpleGrid, Grid, GridItem, Box } from "@chakra-ui/react";

import '../../../css/home.css'
import AboutUs from "./AboutUs";
import Highlights from "./Highlights";
import TeamPictures from "./TeamPictures";


const Home = () => {
    return (
        <SimpleGrid className={'home-grid'} minChildWidth={{base: '100%', md: '400px'}} spacing='15px'>
            <Box height={{base: '90vh', md: '100vh'}}>
                <AboutUs />
            </Box>
            <Box height={{base: '90vh', md: '100vh'}}>
                <Highlights />
            </Box>
            <Box bg='tomato' height={{base: '90vh', md: '75vh'}}>
                Practice Information
            </Box>
            <Box height={{base: '90vh', md: '75vh'}}>
                <TeamPictures />
            </Box>
            <Box bg='tomato' height={{base: '90vh', md: '75vh'}}>
                Links
            </Box>
        </SimpleGrid>
    )
}

export default Home