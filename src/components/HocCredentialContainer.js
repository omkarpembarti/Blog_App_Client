import styled from '@emotion/styled';
import { Box, useMediaQuery } from '@mui/material';
import React from 'react'

const HocCredentialContainer = ({ children, props }) => {
    const isXS = useMediaQuery('(min-width:600px)');
    const CustomBox = styled(Box)({

        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'padding': '20px',
        'border': '1px solid red',
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'strech',
        'gap': '20px'

    });

    return (
        <CustomBox {...props} sx={{ 'width': `${isXS ? '30%' : '90%'}` }}>
            {children}
        </CustomBox >
    )
}

export default HocCredentialContainer
