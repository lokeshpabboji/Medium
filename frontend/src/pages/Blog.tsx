import { useParams } from "react-router-dom";
import { AppBar } from "../components/AppBar"
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton } from "../Skeletons/Blog";

export function Blog(){
    const id = useParams()
    const {loading, blog} = useBlog({ id : id || "" });
    if (loading || !blog){
        return (
            <BlogSkeleton />
        )
    }
    return (
        <div>
            <AppBar authorName={blog?.author.name || "M"}></AppBar>
            <FullBlog authorName={blog?.author.name || ""} title={blog?.title || ""} content={blog?.content || ""}></FullBlog>
        </div>
    )
}