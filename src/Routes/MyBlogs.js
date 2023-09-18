import { Container, Divider, Typography } from '@mui/material'
import React from 'react'


import { useSelector } from 'react-redux'
import Blog from '../components/Blog';

const MyBlogs = () => {

    const { blogs } = useSelector((state) => state.blogSlice);


    return (
        <>

            <Divider variant='middle'></Divider>
            <Container maxWidth='xl' sx={{
                'padding': 5,
                'display': 'flex',
                'flexDirection': 'row',
                'justifyContent': 'space-evenly',
                'flexWrap': 'wrap',
                'gap': 3
            }}>
                <Typography variant='h2' sx={{ fontWeight: 'bold', width: '100%' }}>My Blogs</Typography>

                {
                    (blogs.length !== 0) && (
                        blogs.map((blog, index) =>
                            <Blog
                                {...blog}
                                key={blog._id}
                            />
                        )
                    )
                }

            </Container>
        </>
    )
}

export default MyBlogs
