import { useState } from "react"
import img from "../assets/logo.png"


export function ContentModalLogin() {

    const [login, setLogin] = useState(true);

    return (
        <div>
            {login ?
                <div className="flex flex-col justify-center items-center gap-2 w-11/12 p-2 m-auto bg-zinc-800 rounded-md text-zinc-50">

                    <img src={img} alt="logo marca" />

                    <input type="email" placeholder="Digite seu email" className="rounded-sm p-1" onChange={(event) => (event.target.value)} />

                    <input type="password" placeholder="Digite sua senha" className="rounded-sm p-1" onChange={(event) => (event.target.value)} />

                    <button className="bg-[#085261] p-2 rounded-md" onClick="" >Enviar</button>

                    <div className="flex gap-1">
                        <p>ainda não possui conta?</p>
                        <button onClick={() => setLogin(false)} className="italic text-[#daa520]" >Registrar</button>
                    </div>
                </div>
                :
                <div className="flex flex-col justify-center items-center gap-2 w-11/12 p-2 m-auto bg-zinc-800 rounded-md text-zinc-50">

                    <img src={img} alt="logo marca" />

                    <input type="email" placeholder="Digite seu email" className="rounded-sm p-1" onChange={(event) => (event.target.value)} />

                    <input type="password" placeholder="Digite sua senha" className="rounded-sm p-1" onChange={(event) => (event.target.value)} />

                    <input type="password" placeholder="Confirmar senha" className="rounded-sm p-1" onChange={(event) => (event.target.value)} />

                    <button className="bg-[#085261] p-2 rounded-md" onClick="" >Enviar</button>

                    <div className="flex gap-1">
                        <p>Já possui conta?</p>
                        <button onClick={() => setLogin(true)} className="italic text-[#daa520]" >Login</button>
                    </div>
                </div>
            }
        </div>
    )
}