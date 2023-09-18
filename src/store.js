import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";
import snackbarSlice from "./slices/snackbarSlice";



const store = configureStore({
    reducer: {
        blogSlice: blogSlice,
        snackbarSlice: snackbarSlice
    }
})


export default store;