import img from "../assets/logo.png"
export function Header() {
    return (

        <header className="bg-zinc-900 flex items-center justify-between h-28 w-full shadow-[0_0_5px] shadow-zinc-950 px-4">
            <div>
                <img src={img} alt="logo" className="h-36" />
            </div>
            
            <button className="h-10 w-40 bg-[#D9D9D9] rounded-md" onClick="">
                L O G I N
            </button>
        </header>
    )
}