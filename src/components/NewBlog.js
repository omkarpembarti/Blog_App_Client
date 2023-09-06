import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../contexts/UserDataContext';
import { API } from '../Services/api';
import axios from 'axios';

const newBlogData = {
    title: '',
    content: '',
    imageURL: '',
    userName: '',
    createdDate: new Date()
}

const NewBlog = () => {
    const [image, setImage] = useState('');
    const [imageName, setImageName] = useState('No file chosen');
    const [blogData, setBlogData] = useState(newBlogData);
    const { userInfo } = useContext(UserContext);
    //userInfo.userName
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginTop: '15px',
        padding: '10px 0px 10px 0px',
        boxShadow: 15,
        borderRadius: 3
    };

    useEffect(() => {
        const getImage = async () => {

            if (image) {
                const formdata = new FormData();
                formdata.append("name", imageName);
                formdata.append("file", image);


                const response = await axios.post('http://localhost:6000/blog/publishImage',
                    formdata,
                    {
                        'headers': {
                            'Access-Control-Allow-Origin': '*',
                            'content-Type': 'multipart/form-data'
                        }
                    });
                const imageURL = response.data;
                setBlogData((blogData) => ({ ...blogData, 'userName': userInfo.userName, imageURL }));
            }
        }
        getImage();
    }, [image]);


    const onImageUpload = (e) => {
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name);
    }

    const onPublishClick = () => {
        try {

            const response = API.publishBlog(blogData);


            //API call
        }
        catch (e) { }
    }


    const handleTextChange = (e) => {
        setBlogData((blogData) => ({ ...blogData, [e.target.name]: e.target.value }))
    }

    return (

        <Container maxWidth='md' sx={containerStyle}>

            <TextField
                name='title'
                onChange={handleTextChange}
                label="Title"
                variant="outlined"
                required
            />
            <TextField
                name='content'
                onChange={handleTextChange}
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
                        Image
                    </Button>
                </label>
                <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: '3px' }}>{imageName}</Typography>
            </Stack>

            <Stack direction='row'>
                <Button variant='contained' color='error'>Cancel</Button>
                <Button variant='contained' color='success' onClick={onPublishClick}>Publish</Button>
            </Stack>


        </Container >

    )
}

export default NewBlog;
