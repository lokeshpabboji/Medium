import { useParams } from "react-router-dom";
import { AppBar } from "../components/AppBar"
import { useBlog } from "../hooks";

export function Blog(){
    const id = useParams()
    const {loading, blog} = useBlog({ id });
    console.log(blog)
    if (loading){
        return <div>
            loading...
        </div>
    }
    return (
        <div>
            <AppBar authorName={blog?.author.name || "M"}></AppBar>
            <div className="grid grid-cols-12 px-32 pt-16">
                <div className="col-span-8">
                    <div className="text-6xl font-extrabold mb-5">
                        title of the blog
                    </div>
                    <div className="text-lg mb-10 font-serif">
                        posted on 21 july 2024
                    </div>
                    <div className="text-xl font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima provident deleniti perferendis nostrum vero soluta atque, est nemo exercitationem dicta maxime deserunt perspiciatis labore laboriosam! A quis dicta voluptas officiis.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore assumenda pariatur illo reiciendis, voluptatem non! Odit, repellat, minima molestiae ducimus expedita distinctio sint id est voluptas provident fugiat temporibus vel!
                    </div>
                </div>
                <div className="col-span-4 p-4">
                    <div className="text-lg font-mono pb-3">
                        Author
                    </div>
                    <div className="flex">
                        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-slate-300 rounded-full">
                            <span className="font-medium text-gray-900">M</span>
                        </div>
                        <div className="pl-3 font-semibold text-2xl">
                            Lokesh Pabboji
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}