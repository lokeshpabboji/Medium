import { BlogCard } from "../components/BlogCard"
import { BlogsSkeleton } from "../Skeletons/Blogs"
import { useBlogs } from "../hooks"

export function Blogs(){
    const {loading, blogs} = useBlogs()
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
                    id={blog.id}>
                    </BlogCard>)}
            </div>
        </div>
    )
}