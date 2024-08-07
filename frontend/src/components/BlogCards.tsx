import { useBlogs, useMyblogs } from "../hooks"
import { BlogsSkeleton } from "../Skeletons/Blogs"
import { BlogCard } from "./BlogCard"

export function BlogCards({from} : {from : "Myblogs" | "Blogs"}){
    const {loading, blogs} = from === "Myblogs" ? useMyblogs() : useBlogs()
    if(loading){
        return <BlogsSkeleton />
    }
    return (
        <div className="flex justify-center pt-10">
            <div className="w-4/5">
                {blogs.map(blog => <BlogCard authorName={blog.author.name}
                    title={blog.title}
                    publishedDate="21 july 2024" 
                    content={blog.content} 
                    id={blog.id}
                    key={blog.id}>
                    </BlogCard>)}
            </div>
        </div>
    )
}