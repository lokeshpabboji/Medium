import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export function Blogs(){
    const {loading, blogs} = useBlogs()
    if(loading){
        return <div>
            loading...
        </div>
    }
    return (
        <div>
            <div>
                {/* this is somewhat wrong we need to send the aurhorName of the signedin person not the first blogs authorName*/}
                <AppBar authorName={blogs[0].author.name || "M"}></AppBar>
            </div>
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
        </div>
    )
}