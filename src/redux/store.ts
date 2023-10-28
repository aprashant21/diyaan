import { configureStore } from "@reduxjs/toolkit";
import BlogApi from "./API/BlogApi";

const store = configureStore({
    reducer:{
        [BlogApi.reducerPath]: BlogApi.reducer,
    },
    middleware:(getMid)=>getMid().concat(BlogApi.middleware)
})

export default store;