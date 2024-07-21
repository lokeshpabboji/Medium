import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName : string,
    title : string,
    content : string,
    publishedDate : string,
    id : string
}
export function BlogCard({authorName, title, content, publishedDate, id} : BlogCardProps){
    return (
        <Link to={`/blog/${id}`}>
            <div className="mb-5 cursor-pointer">
                <div className="flex pb-2">
                    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-slate-300 rounded-full">
                        <span className="font-medium text-gray-900">{authorName.charAt(0)}</span>
                    </div>
                    <div className="pl-2">{authorName} . {publishedDate}</div>
                </div>
                <div className="text-xl font-semibold pb-1">{title}</div>
                <div className="text-lg font-thin pb-1">{content.slice(0,100)+"..."}</div>
                <div className="text-slate-400 text-sm">
                    {`${Math.ceil(content.length/100)} minute(s) read`}
                </div>
                <div className="border-b"></div>
            </div>
        </Link>
    )
}