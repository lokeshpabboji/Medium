export function BlogCardSkeleton(){
    return (
        <div className="mb-5">
            <div className="flex pb-2">
                {/* for avatar in blogcard */}
                <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-slate-300 rounded-full"></div>
                <div className="flex pl-2">
                    <div className="h-4 w-20 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="ml-3 h-4 w-20 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                </div>
            </div>
            <div className="text-xl font-semibold pb-1">
                <div className="h-6 w-80 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            </div>
            <div className="text-lg font-thin pb-1">
                <div className="h-3 w-96 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <div className="h-3 w-80 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <div className="h-3 w-72 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            </div>
            <div className="text-slate-400 text-sm">
                <div className="h-2 w-32 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            </div>
            <div className="border-b"></div>
        </div>
    )
}