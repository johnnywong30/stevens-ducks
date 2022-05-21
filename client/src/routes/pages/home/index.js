import React from "react";
import { SimpleGrid, Grid, GridItem, Box } from "@chakra-ui/react";

import AboutUs from "./AboutUs";

const Home = () => {
    return (
        <SimpleGrid minChildWidth={{base: '100%', md: '400px'}} spacing='15px'>
            <Box height={{base: '90vh', md: '100vh'}}>
                <AboutUs />
            </Box>
            <Box bg='tomato' height={{base: '90vh', md: '100vh'}}>
                Carousel for Tournaments
            </Box>
            <Box bg='tomato' height={{base: '90vh', md: '75vh'}}>
                Carousel for Practices
            </Box>
            <Box bg='tomato' height={{base: '90vh', md: '75vh'}}>
                Practice Information
            </Box>
            <Box bg='tomato' height={{base: '90vh', md: '75vh'}}>
                Links
            </Box>
        </SimpleGrid>
    )
}

export default Home