import { BlogCard } from "../components/BlogCard";
import { useMyblogs } from "../hooks"
import { BlogsSkeleton } from "../Skeletons/Blogs";

export function Myblogs(){
    const { loading, blogs } = useMyblogs();
    if(loading){
        return <BlogsSkeleton />
    }
    return (
        <div className="flex justify-center pt-10">
            <div className="w-4/5">
                {blogs.map(blog => <BlogCard authorName={blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    publishedDate="21 July 2024"
                    id={blog.id}
                />)}
            </div>
        </div>
    )    
}