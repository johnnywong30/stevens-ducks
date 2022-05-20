import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Home = () => {
    return (
        <Grid
            h='100%'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={3}
        >
            <GridItem rowSpan={1} colSpan={1}>
                {/* Descriptive Section */}
                About us
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
                {/* Carousel Section */}
                Carousel for Tournaments
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
                {/* Carousel Section */}
                Carousel for Practices
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
                {/* Carousel Section */}
                Practice information
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                {/*  */}
                Links
            </GridItem>
            {/* <Counter/> */}
            
        </Grid>
    )
}

export default Home