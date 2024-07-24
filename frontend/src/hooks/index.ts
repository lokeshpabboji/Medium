import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { Params, useNavigate } from "react-router-dom";

interface Blog {
    content : string,
    title : string,
    id : string
    author : {
        name : string
    }
}

export function useBlog({ id } : {id : Readonly<Params<string>>}) {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${BACKEND_URL}blog/${id.id}`, {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }).then(response => {
            setBlog(response.data.blog)
            setLoading(false)
        }).catch(error  => {
            alert(error.response.data.error)
            navigate('/signin')
        })
    },[id.id])
    return {
        loading,
        blog
    }
}

export function useBlogs() {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            // alert the user in a nice way here
            console.warn("please signin to see the dashboard")
            navigate("/signin");
        }
        try {
            axios.get(`${BACKEND_URL}blog/bulk`, {
                headers : {
                    Authorization : localStorage.getItem('token')
                }
            }).then(response => {
                setBlogs(response.data.blogs)
                setLoading(false)
            }).catch((error)  => {
                alert(`${error.response.data.error} please signin to see the blogs`)
                navigate('/signin')
            })
        } catch (e) {
            alert("error while signing in please signin to see the blogs")
            navigate("/signin")
        }
    },[])
    return {
        loading,
        blogs
    }
}