import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../Services/api";


export const getMyBlogs = createAsyncThunk(
    'blogs/getMyBlogs',
    async (userInfo) => {
        console.log('Inside getMyBLogs');
        //const { userInfo } = useContext(UserContext);
        const response = await API.getMyBlogs(userInfo.userName);
        return response
    });

const myblogSlice = createSlice({
    'name': 'myblogs',
    'initialState': { 'myBlogs': [] },
    'reducers': {
        deleteMyBlog(state, action) {
            state.myBlogs = state.myBlogs.filter((blog) => {
                if (blog._id !== action.payload._id) {
                    return true;
                }
                return false;
            })
        },
        addMyBlog(state, action) {
            console.log(action);
            state.myBlogs.push(action.payload);
        },
        updateMyBlog(state, action) {
            state.myBlogs = state.myBlogs.map((blog) => {
                if (blog._id === action.payload.updatedBlog._id) {
                    return action.payload.updatedBlog;
                }
                return blog;
            })
        }
    }, 'extraReducers': {
        [getMyBlogs.pending]: (state) => { },

        [getMyBlogs.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.myBlogs = payload.data;
        },
        [getMyBlogs.rejected]: (state) => { },
    },

});

export const { deleteMyBlog, addMyBlog, updateMyBlog } = myblogSlice.actions;
export default myblogSlice.reducer;
