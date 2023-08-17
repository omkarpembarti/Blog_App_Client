
import styled from '@emotion/styled';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Container, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState()
    const [imageName, setImageName] = useState('No file chosen')







    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        //border: 'solid 1px black',
        marginTop: '15px',
        padding: '10px 0px 10px 0px',
        boxShadow: 15,
        borderRadius: 3


    };

    const onImageUpload = (e) => {
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name);
    }

    return (

        <Container maxWidth='md' sx={containerStyle}>

            <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Title"
                variant="outlined"
                required
            />
            <TextField
                value={content}
                onChange={(e) => setContent(e.target.value)}
                label="Body"
                variant="outlined"
                multiline
                minRows={6}
                required
            />

            <Stack direction='row'>
                <input
                    id='upload-photo'
                    type='file'
                    accept='image/*'
                    alt='image'
                    hidden
                    onChange={onImageUpload}
                />
                <label htmlFor='upload-photo' >
                    <Button variant='contained' sx={{ borderRadius: '20px' }} component="span" startIcon={<CloudUploadIcon fontSize='large' />}>
                        upload image
                    </Button>
                </label>
                <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '3px' }}>{imageName}</Typography>
            </Stack>

            <Stack direction='row'>
                <Button variant='contained' color='error'>Cancel</Button>
                <Button variant='contained' color='success'>Publish</Button>
            </Stack>


        </Container >

    )
}

export default NewBlog;
