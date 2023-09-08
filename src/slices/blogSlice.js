

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../Services/api';


export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async () => {
        const response = await API.getAllBlogs();
        return response
    })
const initialState = {
    blogs: [],
    loading: false
};


const blogSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addBlog(state, action) {

        },
        deleteBlog(state, action) {

        },
        updateBlog(state, action) {

        }
    }, extraReducers: {
        [getBlogs.pending]: (state) => {
            state.loading = true
        },
        [getBlogs.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.loading = false;
            state.blogs = payload.data;
        },
        [getBlogs.rejected]: (state) => {
            state.loading = false
        },
    },
})




export const { increment, decrement, updateBlog } = blogSlice.actions
export default blogSlice.reducer
