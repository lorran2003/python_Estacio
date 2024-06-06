import img from "../assets/logo.png"
import { ContentModalLogin } from "./ContentModalLogin"
import Modal from "react-modal";
import { useEffect, useState } from "react";


export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (

        <header className="bg-zinc-900 flex flex-col sm:flex-row items-center justify-between h-auto w-full shadow-[0_0_5px] shadow-zinc-950 p-2">
            <div>
                <img src={img} alt="logo" className="h-36" />
            </div>

            <button className="h-10 w-40 bg-zinc-800 text-[#d4af37] rounded-md font-semibold border border-double border-[#d4af37] " onClick={() => openModal()}>
                L O G I N
            </button>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className="h-screen w-full flex flex-col justify-center items-center bg-zinc-400 z-50">
                
                <button className="absolute top-[26%] right-[5%] lg:top-[20%] lg:right-[31%] bg-red-800 h-9 w-9 rounded-md text-zinc-50 text-xl" onClick={() => closeModal()}>X</button>
                
                <ContentModalLogin />

            </Modal>
        </header>
    )
}