import { Avatar, Container, Divider, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
//import Comments from '../components/Comments';
import React, { Suspense, useEffect } from 'react';
import { deepOrange } from '@mui/material/colors';
import { getServerURL } from '../utils/comman';

const LazyComments = React.lazy(() => import('../components/Comments'));

const BlogDetails = () => {
    const param = useParams();
    const { blogs } = useSelector((state) => state.blogSlice);

    useEffect(() => {
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
        topFunction();
    }, [])

    const currentBlog = blogs.find((blog) => {
        if (blog['_id'] === param.id)
            return true;
        return false;
    })

    const containerStyle = {
        'display': 'flex',
        'flexDirection': 'column',
        'gap': '10px',
        'marginTop': '15px',
        'padding': '10px 10px 10px 10px',
        'boxShadow': 5,
        'borderRadius': 2,
        'textAlign': 'start'
    };


    return (
        <div>
            <Container maxWidth='md' sx={containerStyle}>
                <Typography variant='h4' sx={{
                    'fontWeight': 'bold',
                    'fontFamily': 'math'
                }}>{currentBlog.title}</Typography>
                <Divider variant='fullWidth' light={true}></Divider>
                <Stack direction="row" spacing={1} sx={{ 'alignItems': 'center', 'height': '30px' }}>
                    <Avatar sx={{ 'backgroundColor': deepOrange[500] }}>{currentBlog.userName[0].toUpperCase()}</Avatar>
                    <Typography sx={{
                        'fontWeight': 'bold',
                        'fontStyle': 'italic',
                    }}>{currentBlog.userName.charAt(0).toUpperCase() + currentBlog.userName.slice(1)} </Typography>
                    <Typography
                        sx={{ 'fontWeight': 'bold', 'fontStyle': 'italic' }}
                    >| {new Date(currentBlog.createdDate).toDateString()}</Typography>
                </Stack>
                <Divider variant='fullWidth'></Divider>
                <img src={`${getServerURL() + currentBlog.imageURL}`} width='100%' height='auto' alt={currentBlog.title} loading='lazy' />
                <p style={{ 'textAlign': 'justify' }}>
                    {currentBlog.content}
                </p>

            </Container>
            {/* <Comments blog={currentBlog}></Comments> */}
            <Suspense>
                <LazyComments blog={currentBlog}></LazyComments>
            </Suspense>

        </div>
    )
}

export default BlogDetails
