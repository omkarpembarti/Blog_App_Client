import { Divider, Stack, Typography } from '@mui/material'
import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

const LikeCommentCard = () => {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
        >
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <FavoriteBorderOutlinedIcon fontSize='medium' />
                <Typography>
                    4
                </Typography>

            </Stack>

            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <ModeCommentOutlinedIcon fontSize='medium' />
                <Typography>
                    3
                </Typography>

            </Stack>
        </Stack>
    )
}

export default LikeCommentCard
