import { Container } from '@mui/material'
import React from 'react'
import Blog from './Blog'
import { useSelector } from 'react-redux'

const BlogsContainer = () => {

    const { blogs, loading } = useSelector((state) => state.blogSlice);


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
                loading ? <>Loading...</> : (
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
