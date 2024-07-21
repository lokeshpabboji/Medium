export function AppBar({authorName} : {authorName : string}){
    return (
        <div className="flex justify-between px-12 py-4 border-b">
            <div className="text-lg font-bold">
                Medium
            </div>
            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-slate-300 rounded-full">
                <span className="font-medium text-gray-900">{authorName[0].toUpperCase()}</span>
            </div>
        </div>
    )
}