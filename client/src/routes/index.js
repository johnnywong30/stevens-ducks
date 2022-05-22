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
            h='100%'
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(9, 1fr)'
            gap={1}
        >
            <GridItem rowSpan={6} colSpan={1}>
                <Sidebar />
            </GridItem>
            <Routes>
                {/* <GridItem width={'100%'} rowSpan={2} colSpan={5}> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/roster" element={<Roster />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/contact" element={<Contact />} />
                {/* </GridItem> */}
            </Routes>
            {/* If we wanted a footer, we put it here as a grid item, row span 1 and col span 5 */}
        </Grid>
    )
}

export default Router;