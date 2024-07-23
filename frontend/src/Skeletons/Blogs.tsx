import { BlogCardSkeleton } from "./BlogCard";
import { AppBar } from "./AppBar";

export function BlogsSkeleton(){
    return (
        <div role="status" className="w-full animate-pulse">
            <div>
                <AppBar></AppBar>
                <div className="flex justify-center pt-10">
                    <div className="w-4/5">
                        <BlogCardSkeleton /><BlogCardSkeleton /><BlogCardSkeleton />
                    </div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}