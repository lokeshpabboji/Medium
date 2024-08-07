import { BlogCardSkeleton } from "./BlogCard";

export function BlogsSkeleton(){
    return (
        <div role="status" className="w-full animate-pulse">
            <div className="flex justify-center pt-10">
                <div className="w-4/5">
                    <BlogCardSkeleton /><BlogCardSkeleton /><BlogCardSkeleton />
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}