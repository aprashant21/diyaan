"use client"
import { useState } from "react";

export default function FormComponent() {
    const [title, settitle] = useState('');
    const [desc, setDesc] = useState('');


    const formSubmit = (e: any) => {
        e.preventDefault();
        
    }
    return (
        <div>
            <div className="flex justify-center bg-green-800 text-white">
                <form action="" className="p-10 mt-10" >
                    <div className="flex flex-col">
                        <label htmlFor="">Title</label>
                        <input onChange={(e)=>settitle(e.target.value)} value={title} type="text" name="title" id="title" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="">Description</label>
                        <input onChange={(e)=>setDesc(e.target.value)} value={desc} type="text" name="desc" id="desc" />
                    </div>
                    <button onClick={formSubmit} className="w-full font-bold py-2 rounded-md mt-3 bg-red-800 text-white"> </button>
                </form>
            </div>
        </div>
    )
}
