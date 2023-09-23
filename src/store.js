import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";
import snackbarSlice from "./slices/snackbarSlice";
import myBlogSlice from "./slices/myBlogSlice";

const store = configureStore({
    reducer: {
        blogSlice: blogSlice,
        myBlogSlice: myBlogSlice,
        snackbarSlice: snackbarSlice,
    }
})


export default store;