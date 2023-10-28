"use client";

import { useGetAllBlogsQuery } from "@/redux/API/BlogApi";

export default function BlogList() {
    const { data: blogs, isLoading } = useGetAllBlogsQuery(null);
    return (
        <div className="mt-4">
            <h1 className="text-2xl font-bold text-center">Blog Lists</h1>
            {isLoading ? <div className="flex mt-4 justify-center animate-pulse"> Loading... </div> : <div className="grid grid-col-3">
                {blogs?.map((blog) => (<>
                    <div className="cards bg-red-800 text-white p-10 m-2">
                        <h1 className="text-2xl font-bold">{blog?.title}</h1>
                        <span>{blog?.desc}</span>
                    </div>
                </>))}

            </div>}
        </div>
    )
}
