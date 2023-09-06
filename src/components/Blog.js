import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import '../GlobalCss_MUI.css';
import { CardActionArea, CardMedia } from '@mui/material';
import './BlogStyle.css';

export default function Blog(props) {


    const cardStyle = {
        'width': '100%', /* Set the width of the container */
        'display': 'flex',
        "flexDirection": 'column'
    }

    let createdDate = new Date(props.createdDate);
    createdDate = createdDate.toDateString();


    return (

        <Card variant='elevation' sx={{ borderRadius: '16px', maxHeight: '400px', width: '330px' }} raised={true}>
            <CardActionArea>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} >
                            OP
                        </Avatar>
                    }

                    title={props.title}
                    subheader={createdDate}
                    subheaderTypographyProps={{ textAlign: 'start' }}
                />
                <CardMedia
                    component="img"
                    sx={{ width: '100%', height: '150px' }}
                    image={props.imageURL}
                    alt="Live from space album cover"
                />
                <CardContent sx={cardStyle}>
                    <Typography align='justify' component='div' variant='body2' className='cardContent-body'>
                        {props.content}
                    </Typography>
                </CardContent>


            </CardActionArea>


        </Card >
    );
}