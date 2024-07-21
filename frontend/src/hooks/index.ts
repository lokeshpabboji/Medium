import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { Params } from "react-router-dom";

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
    // const { blogId } = useParams();

    useEffect(() => {
        console.log(id.id)
        axios.get(`${BACKEND_URL}blog/${id}`, {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }).then(response => {
            setBlog(response.data.blog)
            setLoading(false)
        })
    },[id])
    return {
        loading,
        blog
    }
}

export function useBlogs() {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}blog/bulk`, {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }).then(response => {
            setBlogs(response.data.blogs)
            setLoading(false)
        })
    },[])
    return {
        loading,
        blogs
    }
}