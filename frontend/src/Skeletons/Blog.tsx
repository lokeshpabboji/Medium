
export function BlogSkeleton(){
    return (
        <div role="status" className="w-full animate-pulse">
            <div className="grid grid-cols-12 px-32 pt-16">
                <div className="col-span-8">    
                    <div className="h-16 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>    
                    <div className="h-6 w-1/5 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="h-4 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="h-4 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="h-4 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="h-4 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="h-4 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="h-4 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                </div>
                <div className="col-span-4 p-4">
                    <div className="h-4 w-16 pb-3 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="flex">
                        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-slate-300 rounded-full"></div>
                        <div className="flex flex-col justify-center">
                            <div className="h-4 w-14 ml-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}