import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

import Sidebar from "components/layout/Sidebar";
import Pages from "./pages";

const { Home, Calendar, Roster, Stats, Contact } = Pages


const Router = () => {
    return (
        <Grid
            h='100vh'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={0}
        >
            <GridItem maxW={'200px'} rowSpan={2} colSpan={1} >
                <Sidebar />
            </GridItem>
            <GridItem rowSpan={2} colSpan={4} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/roster" element={<Roster />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </GridItem>
            {/* If we wanted a footer, we put it here as a grid item, row span 1 and col span 5 */}
        </Grid>
    )
}

export default Router;