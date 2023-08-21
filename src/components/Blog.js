import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import '../GlobalCss_MUI.css';
import { CardActionArea, CardActions } from '@mui/material';

export default function Blog() {


    return (

        <Card variant='elevation' sx={{ borderRadius: '16px', border: '1px solid dodgerblue' }} raised={true}>
            <CardActionArea>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} >
                            OP
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella . 15 Aug"
                />
                <CardContent>
                    <Typography align='left' component='div' >
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like. This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.

                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions >
                <>
                    <LikeCommentCard />
                </>
            </CardActions> */}

        </Card>
    );
}