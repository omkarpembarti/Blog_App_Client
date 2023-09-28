import { Container, Divider, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import Blog from '../components/Blog';

import { UserContext } from '../contexts/UserDataContext';
import { getMyBlogs } from '../slices/myBlogSlice';

const MyBlogs = () => {

    const { userInfo } = useContext(UserContext);
    const dispatch = useDispatch();
    const { myBlogs, loading } = useSelector((state) => state.myBlogSlice);

    useEffect(() => {
        if (myBlogs.length === 0) {
            dispatch(getMyBlogs(userInfo));
        }
        // eslint-disable-next-line
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
                    loading ? <>Loading...</> : <>{
                        (myBlogs.length === 0) ? <>No Blogs</> : (
                            myBlogs.map((blog, index) =>
                                <Blog
                                    {...blog}
                                    key={blog._id}
                                />
                            )
                        )
                    }</>
                }


            </Container>
        </>
    )
}

export default MyBlogs
