import styled from '@emotion/styled';
import { Box, useMediaQuery } from '@mui/material';
import React from 'react'

const CustomBox = styled(Box)({
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
    'padding': '20px',
    'border': '1px solid red',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'strech',
    'gap': '20px'

});

const HocCredentialContainer = ({ children }) => {
    const isXS = useMediaQuery('(min-width:600px)');

    return (
        <CustomBox sx={{ 'width': `${isXS ? '30%' : '90%'}`, 'backgroundColor': 'black' }}>
            {children}
        </CustomBox >
    )
}

export default HocCredentialContainer
