import { Container, Divider, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'


import { useSelector } from 'react-redux'
import Blog from '../components/Blog';
import { API } from '../Services/api';
import { UserContext } from '../contexts/UserDataContext';

const MyBlogs = () => {

    const { userInfo } = useContext(UserContext);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {

        const getMyBlogs = async () => {

            const response = await API.getMyBlogs(userInfo.userName);
            setBlogs(response.data);
        }
        getMyBlogs();
    }, []);

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
                                setBlogs={setBlogs}
                            />
                        )
                    )
                }

            </Container>
        </>
    )
}

export default MyBlogs
