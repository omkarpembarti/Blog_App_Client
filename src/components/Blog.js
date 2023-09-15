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
import { useNavigate } from 'react-router';

export default function Blog(props) {

    const navigate = useNavigate();
    const cardStyle = {
        'width': '100%', /* Set the width of the container */
        'display': 'flex',
        "flexDirection": 'column'
    }
    let createdDate = new Date(props.createdDate);
    createdDate = createdDate.toDateString();



    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (
        <Card variant='elevation' sx={{ borderRadius: '16px', maxHeight: '400px', width: '330px' }} raised={true}>
            <CardActionArea onClick={() => { navigate(`/blog/${props._id}`) }}>
                <CardHeader
                    avatar={
                        <Avatar {...stringAvatar(`${props.userName} Random`)} >
                            {props.userName[0].toUpperCase()}
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
                    <Typography
                        align='justify'
                        component='div'
                        variant='body2'
                        className='cardContent-body'>
                        {props.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}