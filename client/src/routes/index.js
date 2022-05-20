import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

import Sidebar from "components/layout/Sidebar";
import Pages from "./pages";

const { Home } = Pages


const Router = () => {
    return (
        <>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default Router;