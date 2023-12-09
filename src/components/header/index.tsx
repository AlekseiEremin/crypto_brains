import React from 'react';
import {Box, Button, Divider, IconButton} from "@mui/material";
import {ReactComponent as MainLogo} from "../../icons/main_logo.svg";
import {headerMenuItems} from "../../utils/constants";
import HeaderIconButton from "./HeaderIconButton";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../routes/routes";

const Header = () => {
        const navigate = useNavigate();

        return (
            <Box display={'flex'} alignItems={'center'} height={120} sx={{
                backgroundColor: '#1E1F25',
                pl: 20,
                pr: 20,
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <Box width={'20%'} height={46} display={'flex'} alignItems={'center'}>
                    <IconButton onClick={() => {
                        navigate(`/${Routes.HOME}`)
                    }} sx={{
                        width: 'fit-content',
                        height: 'fit-content',
                        borderRadius: '4px',
                    }}>
                        <MainLogo/>
                    </IconButton>
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{backgroundColor: '#ADB3BF', opacity: '0.5', ml: 5}}/>
                </Box>
                <Box width={'60%'} height={46} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    {headerMenuItems.map((item, index, arr) => {
                        return <HeaderIconButton
                            onClick={() => {
                                navigate(`/${item.route}`)
                            }}
                            sx={{
                                mr: index !== arr.length - 1 ? 5 : 0
                            }} key={item.label}>
                            <Box color={'#ADB3BF'} fontSize={'18px'}>{item.label}</Box>
                        </HeaderIconButton>
                    })}
                </Box>
                <Box justifyContent={'flex-end'} width={'20%'} height={46} display={'flex'} alignItems={'center'}>
                    <HeaderIconButton>
                        <Box color={'#ADB3BF'} fontSize={'18px'}>Log in</Box>
                    </HeaderIconButton>
                    <Button sx={{textTransform: 'none'}}
                            variant={'contained'}>
                        Sign up
                    </Button>
                </Box>
            </Box>
        );
    }
;

export default Header;