import React from 'react';
import {Box, Button} from "@mui/material";
import {mainMenuItems} from "../../../utils/constants";
import CommonMarketTrends from '../../common/CommonMarketTrends'
import HeaderIconButton from "../../header/HeaderIconButton";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CommonDivider from "../../common/CommonDivider";

const MarketTrends = () => {
        return (
            <Box width={'100%'} height={960} sx={{
                boxSizing: 'border-box',
                pl: 20,
                pr: 20,
            }}>
                <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                    <Box fontWeight={700} fontSize={58} color={'#fff'}>Market Trends</Box>
                    <Box display={'flex'}>
                        {mainMenuItems.map((item, key, arr) => {
                            return <HeaderIconButton
                                sx={{mr: key === arr.length - 1 ? '0' : '5', height: 'fit-content'}}
                                key={item}>
                                {item}
                            </HeaderIconButton>
                        })}
                    </Box>
                </Box>
                <CommonDivider/>
                <Box mt={6} display={'flex'} justifyContent={'space-between'}>
                    <CommonMarketTrends/>
                </Box>
                <Box width={'100%'} display={'flex'} justifyContent={'center'}>
                    <Button sx={{
                        textTransform: 'capitalize',
                        fontSize: '20px',
                        color: '#fff',
                        borderColor: '#fff',
                        fontWeight: 400,
                        mt: 6,
                    }} variant={'contained'}>
                        See all market
                        <CallMadeIcon sx={{
                            fontSize: '0.9rem',
                            ml: 1
                        }}/>
                    </Button>
                </Box>
            </Box>
        );
    }
;

export default MarketTrends;