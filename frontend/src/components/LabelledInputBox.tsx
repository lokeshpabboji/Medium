import { ChangeEvent } from "react"

interface LabelledInputType {
    label : string,
    placeholder : string,
    onChange : (e : ChangeEvent<HTMLInputElement>) => void,
    type : string
}

export function LabelledInputBox({label, placeholder, onChange, type} : LabelledInputType){
    return (
        <div className="my-5">
            <div className="text-left font-semibold pb-1">{label}</div>
            <input className="w-full p-2 border border-slate-200 rounded-lg hover:shadow-md" placeholder={placeholder} onChange={onChange} type={type} />     
        </div>
    )
}