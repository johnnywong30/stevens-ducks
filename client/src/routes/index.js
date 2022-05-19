import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

import Pages from "./pages";

const { Home } = Pages


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}

export default Router;