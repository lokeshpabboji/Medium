import { Link, useNavigate } from "react-router-dom";

export function AppBar({authorName} : {authorName : string}){
    const navigate = useNavigate();
    return (
        <div className="flex justify-between px-12 py-4 border-b">
            <button onClick={() => {
                navigate("/publish")
            }} className="text-center text-white rounded-lg p-2 bg-black cursor-pointer">AddBlog</button>
            <div className="flex flex-col justify-center text-xl font-bold">
                <Link to={'/home'}>
                    Medium
                </Link>
            </div>
            <div className="flex flex-col justify-center">
                <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-slate-300 rounded-full">
                    <span className="font-medium text-gray-900">{authorName[0].toUpperCase()}</span>
                </div>
            </div>
        </div>
    )
}