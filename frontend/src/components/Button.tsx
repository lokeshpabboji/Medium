export function Button({text, onClick} : {text : string, onClick : () => void}) {
    return (
        <button onClick={onClick} className="w-full text-center text-white mt-8 rounded-lg p-2 bg-black cursor-pointer">{text}</button>
    )
}