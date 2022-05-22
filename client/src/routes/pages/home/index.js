import React from "react";
import { SimpleGrid, Grid, GridItem, Box } from "@chakra-ui/react";

import '../../../css/home.css'
import AboutUs from "./AboutUs";
import Highlights from "./Highlights";
import TeamPictures from "./TeamPictures";
import PracticeInfo from "./PracticeInfo";
import Links from "./Links";
import ImportantLinks from "./ImportantLinks";


const Home = () => {
    return (
        <>
            <GridItem rowSpan={1} colSpan={{base: 8, md: 4}}>
                <AboutUs />
            </GridItem>
            <GridItem rowSpan={1} colSpan={{base: 8, md: 4}}>
                <Highlights />
            </GridItem>
            <GridItem rowSpan={1} colSpan={{base: 8, md: 4}}>
                <PracticeInfo />
            </GridItem>
            <GridItem rowSpan={1} colSpan={{base: 8, md: 4}}>
                <TeamPictures />
            </GridItem>
            <GridItem rowSpan={1} colSpan={{base: 8, md: 4}}>
                <ImportantLinks />
            </GridItem>
            <GridItem rowSpan={1} colSpan={{base: 8, md: 4}}>
                <Links />
            </GridItem>

        </>
        // <SimpleGrid className={'home-grid'} minChildWidth={{base: '100%', md: '400px'}} spacing='15px' maxW={'50vw'}>
        //     {/* TODO: work on these responsive section heights */}
        //     <Box height={{base: '85vh', xs: '100vh'}} w={{base:'100%', md: '700px'}}>
        //         <AboutUs />
        //     </Box>
        //     <Box height={{base: '70vh', xs: '75vh', sm: '100vh'}} w={{base:'100%', md: '700px'}}>
        //         <Highlights />
        //     </Box>
        //     <Box height={{base: '100%'}}>
        //         <PracticeInfo />
        //     </Box>
        //     <Box height={{base: '100%'}}>
        //         <TeamPictures />
        //     </Box>
        //     <Box height={{base: '100%'}}>
        //         <ImportantLinks />
        //     </Box>
        //     <Box height={{base: 'calc(100% + 25px)'}}>
        //         <Links />
        //     </Box>
        // </SimpleGrid>
    )
}

export default Home