import axios from "axios"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Publish(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate()
    return (
        <div>
            <AppBar authorName="M"></AppBar>
            <div className="mx-12 mt-3">
                <div className="flex justify-center mb-3">
                    <input required type="text" onChange={(e) => {
                        setTitle(e.target.value)
                    }} className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg block w-4/5 p-2.5" placeholder="Blog Title" />
                </div>
                <div className="border border-gray-200 rounded-xl bg-gray-50">
                    <textarea rows={12} onChange={(e) => {
                        setContent(e.target.value)
                    }} className="p-10 w-full text-lg text-gray-700 focus:outline-none" placeholder="blog content here..." required >
                    </textarea>
                    <div className="flex justify-center py-2">
                        <button onClick={async () => {
                            console.log(title, content)
                            const response = await axios.post(`${BACKEND_URL}blog`,{
                                title : title,
                                content : content
                            }, {
                                headers : {
                                    Authorization : localStorage.getItem('token')
                                }
                            })
                            console.log(response)
                            const data = await response.data;
                            if(data.message){
                                alert("invalid inputs")
                            }
                            const id = response.data.id;
                            navigate(`/blog/${id}`)
                        }} type="submit" className="inline-flex items-center py-2.5 px-4 text-m font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-700">
                            Post Blog
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}