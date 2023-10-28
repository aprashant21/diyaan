import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BlogApi = createApi({
    reducerPath:"blogs",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes:['BLOG'],
    endpoints:(builder)=>({
        addBlog: builder.mutation({
            query:(data)=>({
                url: '/api/blogs',
                method: 'POST',
                body: data
            }),
            invalidatesTags:['BLOG']
        }),
        getAllBlogs: builder.query({
            query: ()=>'/api/blogs',
            providesTags:['BLOG'],
            transformResponse:(response: {data: BlogApiType[]})=>response.data
        }),
   })
})

export type BlogApiType={
    title:string,
    desc:string,
}