export function FullBlog({authorName, title, content} : {authorName : string, title : string, content : string}) {
    return (
        <div className="grid grid-cols-12 px-32 pt-16">
                <div className="col-span-8">
                    <div className="text-6xl font-extrabold mb-5">
                        {title}
                    </div>
                    <div className="text-lg mb-10 font-serif">
                        posted on 21 july 2024
                    </div>
                    <div className="text-xl font-semibold">
                        {content}
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
                            {authorName}
                        </div>
                    </div>
                </div>
            </div>
    )
}