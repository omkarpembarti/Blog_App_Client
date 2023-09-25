import { Avatar, Container, Divider, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Comments from '../components/Comments';
import { useEffect } from 'react';




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
                <Typography variant='h4'>{currentBlog.title}</Typography>
                <Divider variant='fullWidth' light={true}></Divider>
                <Stack direction="row" spacing={1} sx={{ 'alignItems': 'center', 'height': '30px' }}>
                    <Avatar >OP</Avatar>
                    <Typography>{currentBlog.userName} </Typography>
                    <Typography>| {new Date(currentBlog.createdDate).toDateString()}</Typography>
                </Stack>
                <Divider variant='fullWidth'></Divider>
                <img src={currentBlog.imageURL}
                    width='100%' height='auto' alt='Loading'
                />
                <p style={{ 'textAlign': 'justify' }}>
                    {currentBlog.content}
                </p>

            </Container>
            <Comments blog={currentBlog}></Comments>

        </div>
    )
}

export default BlogDetails
