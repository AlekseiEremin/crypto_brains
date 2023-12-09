import React, {MouseEventHandler, ReactNode} from 'react';
import {Box, IconButton, SxProps, Theme, Typography} from "@mui/material";

type propsType = {
    children: ReactNode,
    sx?: SxProps<Theme>
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const HeaderIconButton = ({children, sx, onClick}: propsType) => {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                mr: 5,
                borderRadius: '4px',
                "&:hover": {
                    backgroundColor: 'rgba(173,179,191,0.1)',
                    width: 'fit-content'
                },
                ...sx
            }}>
            <Box color={'#ADB3BF'} fontSize={'18px'}>{children}</Box>
        </IconButton>
    );
};

export default HeaderIconButton;