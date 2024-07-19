import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export function Signin(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <Auth type={"signin"}></Auth>
            <Quote></Quote>
        </div>
    )
}