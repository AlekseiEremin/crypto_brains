import React from 'react';
import {Box, Typography} from "@mui/material";
import CommonMarketTrends from "../../common/CommonMarketTrends";
import CommonDivider from "../../common/CommonDivider";
import TradingTable from "./TradingTable";


const Trade = () => {
    return (
        <Box sx={{
            boxSizing: 'border-box',
            pl: 20,
            pr: 20,
        }}>

            <Typography textAlign={'center'}
                        fontSize={46}
                        fontWeight={700}
                        mt={10}
                        mb={6}>
                Featured Coins
            </Typography>
            <Box display={'flex'} justifyContent={'space-between'}>
                <CommonMarketTrends/>
            </Box>
            <CommonDivider/>
            <TradingTable/>
        </Box>
    );
};

export default Trade;