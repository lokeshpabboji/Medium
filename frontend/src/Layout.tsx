import { Outlet } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { AppBar as AppBarSkeleton } from "./Skeletons/AppBar";
import { useUserInfo } from "./hooks";
import { BlogsSkeleton } from "./Skeletons/Blogs";

export default function Layout(){
    const {loading, info} = useUserInfo();
    if(loading){
        return (
            <>
                <AppBarSkeleton />
                <BlogsSkeleton />
            </>
        )
    }
    return (
        <div>
            <AppBar authorName={info?.name || "M"} />
            <Outlet />
        </div>
    )
}