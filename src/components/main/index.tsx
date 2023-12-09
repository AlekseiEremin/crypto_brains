import React from 'react';
import LandingPage from "./landingPage";
import {Navigate, Route, Routes} from "react-router-dom";
import Featured from "./featured";
import Trade from "./trade";
import {Routes as RoutesEnum} from '../../routes/routes'
import {Box} from "@mui/material";

const Main = () => {
    return (
        <Box>
            <Routes>
                <Route path={RoutesEnum.HOME} element={<LandingPage/>}/>
                <Route path={RoutesEnum.FEATURED} element={<Featured/>}/>
                <Route path={RoutesEnum.TRADE} element={<Trade/>}/>
                <Route path={"*"} element={<Navigate to={RoutesEnum.HOME}/>}/>
            </Routes>
        </Box>
    );
};

export default Main;