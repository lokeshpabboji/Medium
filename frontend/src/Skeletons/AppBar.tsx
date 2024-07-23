export function AppBar(){
    return (
        <div>
            <div className="flex justify-between px-12 py-4 border-b">
                {/* for button */}
                <div className="h-10 w-20 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <div className="flex flex-col justify-center text-xl font-bold">
                    {/* for Medium text */}
                    <div className="h-8 w-16 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                </div>
                <div className="flex flex-col justify-center">
                    {/* for avatar */}
                    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-slate-300 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}