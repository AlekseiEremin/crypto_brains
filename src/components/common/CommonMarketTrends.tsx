import React, {Fragment} from 'react';
import {marketTrends} from "../../utils/constants";
import {Box} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import {ReactComponent as UpGraph} from "../../icons/UpGraph.svg";
import {ReactComponent as DownGraph} from "../../icons/DownGraph.svg";

const CommonMarketTrends = () => {
    return (<Fragment>
            {marketTrends.map((item, key) => {
                return <Box sx={{
                    borderRadius: '2px',
                    textAlign: 'center',
                    border: '2px solid #1E1F25',
                    padding: '40px 30px'
                }} key={key}>
                    <Fragment>{item.icon}</Fragment>
                    <Box mt={3} color={'#fff'} fontSize={'20px'}>
                        {item.label}
                    </Box>
                    <Box mt={2} color={item.positive ? '#06B470' : '#F74E2C'} fontSize={16}>
                        {item.positive ? <TrendingUpIcon sx={{mr: 1, fontSize: '1.1rem'}}/> :
                            <TrendingDownIcon sx={{mr: 1, fontSize: '1.1rem'}}/>}
                        {item.change}
                    </Box>
                    <Box mt={2} mb={2} fontSize={24} color={'#fff'}>
                        ₹{item.value}
                    </Box>
                    {item.positive ? <UpGraph/> : <DownGraph/>}
                </Box>
            })}
        </Fragment>
    );
};

export default CommonMarketTrends;