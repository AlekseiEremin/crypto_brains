import React from 'react';
import MainFrame from "./MainFrame";
import MarketTrends from "./MarketTrends";
import {Box} from "@mui/material";

const LandingPage = () => {
    return (
        <div>
            <Box sx={{
                backgroundColor: '#141618'
            }}>
                <MainFrame/>
                <MarketTrends/>
            </Box>
        </div>
    );
};

export default LandingPage;