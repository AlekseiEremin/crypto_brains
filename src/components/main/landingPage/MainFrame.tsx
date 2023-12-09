import React from 'react';
import {Box, Button, Divider, Typography} from "@mui/material";
import bgImage from '../../../images/laptop.png'
import {ReactComponent as DashedLine} from '../../../icons/dashed-gradient-line.svg'
import CallMadeIcon from '@mui/icons-material/CallMade';
import {trends, TrendType} from "../../../utils/constants";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {TrendingDown} from "@mui/icons-material";

const MainFrame = () => {
        return (
            <Box width={'100%'} height={960} sx={{
                boxSizing: 'border-box',
                pl: 20,
                pr: 20,
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'calc(100% - 100px) top', // Position the background image on the right
                backgroundRepeat: 'no-repeat', // Prevent background image from repeating
                backgroundSize: '33%',
            }}>

                <Box sx={{width: '975px'}} fontWeight={700} pt={10}>
                    <Box display={'flex'} alignItems={'center'}>
                        <Box sx={{borderTop: '2px solid #1B70F1', width: '40px', mr: 1}}/>
                        <Typography fontSize={24} fontWeight={600} color={'#1B70F1'}>Crypto Brains</Typography>
                    </Box>
                    <Typography fontWeight={700} fontSize={96}>
                        Buy & Sell Crypto Easy
                    </Typography>
                    <Box display={'flex'} flexWrap={'wrap'} width={805} justifyContent={'end'}>
                        <Typography fontWeight={700} fontSize={96}>With Crypto Brains</Typography>
                        <DashedLine style={{alignSelf: 'flex-end'}}/>
                    </Box>
                    <Typography fontSize={'20px'} color={'#ADB3BF'} mt={2} fontWeight={400}>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when <br/>
                        looking at its layout.
                    </Typography>
                </Box>
                <Box display={'flex'}>
                    <Button sx={{
                        textTransform: 'capitalize',
                        fontSize: '20px',
                        color: '#fff',
                        borderColor: '#fff',
                        fontWeight: 400,
                        mr: 4,
                    }} variant={'contained'}>
                        Start now
                        <CallMadeIcon sx={{
                            fontSize: '0.9rem',
                            ml: 1
                        }}/>
                    </Button>
                    <Button sx={{
                        fontSize: '20px',
                        color: '#fff',
                        borderColor: '#fff',
                        fontWeight: 400,
                        textTransform: 'capitalize'
                    }} variant={'outlined'}>Beginner’s Guide</Button>
                </Box>
                <Box mt={24} display={'flex'} justifyContent={'space-between'}>
                    {trends.map((item: TrendType, key) => {
                        return <Box key={key} display={'flex'} alignItems={'center'}>
                            <Box>
                                <Box width={148} justifyContent={'space-between'} display={'flex'} alignItems={'center'}>
                                    <Typography color={'#ADB3BF'} fontSize={16}>{`${item.from}/${item.to}`}
                                    </Typography>
                                    <Box display={'flex'} alignItems={'center'}
                                         color={item.positive ? '#06B470' : '#F74E2C'} fontSize={14}>
                                        {item.positive ? <TrendingUpIcon sx={{mr: 1, fontSize: '1.1rem'}}/> :
                                            <TrendingDownIcon sx={{mr: 1, fontSize: '1.1rem'}}/>} {item.change}%
                                    </Box>
                                </Box>
                                <Box color={'#FFFFFF'} fontSize={'20px'}>₹{item.value}</Box>
                            </Box>
                            <Box height={'40px'} width={'2px'} ml={3}>
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    sx={{backgroundColor: '#ADB3BF', opacity: '0.5', height: '100%'}}/>
                            </Box>
                        </Box>
                    })}
                </Box>
            </Box>
        );
    }
;

export default MainFrame;