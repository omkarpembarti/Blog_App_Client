import { Container } from '@mui/material'
import React from 'react'
import Blog from './Blog'
import { useSelector } from 'react-redux'

const BlogsContainer = () => {

    const { blogs } = useSelector((state) => state.blogSlice);


    return (
        <Container maxWidth='xl' sx={{
            'padding': 5,
            'display': 'flex',
            'flexDirection': 'row',
            'justifyContent': 'space-evenly',
            'flexWrap': 'wrap',
            'gap': 3
        }}>
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
    )
}

export default BlogsContainer
