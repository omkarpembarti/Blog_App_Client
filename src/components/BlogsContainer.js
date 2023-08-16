import { Container } from '@mui/material'
import React from 'react'
import Blog from './Blog'

const BlogsContainer = () => {
    return (
        <Container maxWidth='md' sx={{ 'backgroundColor': 'success', 'padding': 5, 'display': 'flex', 'flexDirection': 'column', 'gap': 5 }}>
            <Blog />
            <Blog />
            <Blog />
            <Blog />
        </Container>
    )
}

export default BlogsContainer
