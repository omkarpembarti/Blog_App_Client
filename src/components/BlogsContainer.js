import { Container } from '@mui/material'
import React from 'react'
import Blog from './Blog'

const BlogsContainer = () => {
    return (
        <Container maxWidth='lg' sx={{
            'padding': 5,
            'display': 'flex',
            'flexDirection': 'row',
            'justifyContent': 'space-evenly',
            'flexWrap': 'wrap',
            'gap': 3
        }}>
            <Blog />
            <Blog />
            <Blog />
            <Blog /><Blog /><Blog /><Blog />
            <Blog />
        </Container>
    )
}

export default BlogsContainer
