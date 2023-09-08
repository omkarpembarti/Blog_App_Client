import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";



const store = configureStore({
    reducer: {
        blogSlice: blogSlice
    }
})


export default store;