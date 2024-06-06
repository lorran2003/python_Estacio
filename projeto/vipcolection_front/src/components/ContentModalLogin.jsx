import { useState } from "react";
import img from "../assets/logo.png";
import axios from 'axios'; 


export function ContentModalLogin() {
    const [login, setLogin] = useState(true);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const data = { 
                Email: Email, 
                Password: Password  
            };
            console.log("Data to be sent for login:", data);
        
            const response = await axios.post('http://localhost:5000/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        
            console.log("Login Response received:", response.data);
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to login. Please try again.');
        }
    };
    
    const handleClientRegistration = async () => {
        try {
            const data = { 
                Name: Name,
                Email: Email, 
                Password: Password 
            };
        
            console.log("Data to be sent for client registration:", data);
        
            const response = await axios.post('http://localhost:5000/client', data, {
                headers: {
                    'Content-Type': 'application/json'aaa
                }
            });
        
            console.log("Client Registration Response received:", response.data);
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to register client. Please try again.');
        }
    };

    return (
        <div>
            {error && <div>{error}</div>}
            {login ?
                <div className="flex flex-col justify-center items-center gap-3 w-11/12 p-2 m-auto bg-zinc-800 rounded-md text-zinc-50">
                    <img src={img} alt="logo marca" />
                    <input type="Email" placeholder="Digite seu email" className="rounded-sm p-1 text-zinc-500" onChange={(event) => setEmail(event.target.value)} />
                    <input type="Password" placeholder="Digite sua senha" className="rounded-sm p-1 text-zinc-500" onChange={(event) => setPassword(event.target.value)} />
                    <button className="bg-[#085261] p-2 rounded-md" onClick={handleLogin}>Enviar</button>
                    <div className="flex gap-1">
                        <p>ainda não possui conta?</p>
                        <button onClick={() => setLogin(false)} className="italic text-[#daa520]" >Registrar</button>
                    </div>
                </div>
                :
                <div className="flex flex-col justify-center items-center gap-3 w-11/12 p-2 m-auto bg-zinc-800 rounded-md text-zinc-50">
                    <img src={img} alt="logo marca" />
                    <input type="Name" placeholder="Digite seu nome" className="rounded-sm p-1 text-zinc-500" onChange={(event) => setName(event.target.value)} />
                    <input type="Email" placeholder="Digite seu email" className="rounded-sm p-1 text-zinc-500" onChange={(event) => setEmail(event.target.value)} />
                    <input type="Password" placeholder="Digite sua senha" className="rounded-sm p-1 text-zinc-500" onChange={(event) => setPassword(event.target.value)} />
                    <button className="bg-[#085261] p-2 rounded-md" onClick={handleClientRegistration}>Enviar</button>
                    <div className="flex gap-1">
                        <p>Já possui conta?</p>
                        <button onClick={() => setLogin(true)} className="italic text-[#daa520]" >Login</button>
                    </div>
                </div>
            }
        </div>
    )
}
