import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import { API } from '../Services/api'

const BlogsContainer = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        const fetchAllBlogs = async () => {
            const response = await API.getAllBlogs();
            setBlogs(response.data);
        }
        fetchAllBlogs()
    }, [])



    return (
        <Container maxWidth='xl' sx={{
            'padding': 5,
            'display': 'flex',
            'flexDirection': 'row',
            'justifyContent': 'space-evenly',
            'flexWrap': 'wrap',
            'gap': 3
        }}>
            {(blogs.length !== 0) && (
                blogs.map((blog, index) =>
                    <Blog
                        {...blog}
                        key={index}
                    />
                )

            )}
        </Container>
    )
}

export default BlogsContainer
