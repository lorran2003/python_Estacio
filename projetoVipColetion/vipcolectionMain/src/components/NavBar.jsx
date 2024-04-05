"use client"
import { Navlink } from './NavLink'
import MenuOverlay from './MenuOverlay';
import { useState } from 'react';
import image from '../assets/logo.jpg';

const navLinks = [
    {
        title: "Inicio",
        path: "/",
    },
    {
        title: "Catalogo",
        path: "/",
    },
    {
        title: "Sobre",
        path: "/",
    },
];

export const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleLoginButtonClick = () => {
        window.location.href = "/login";
    };

    return (
        <header className='bg-zinc-900 max-w-screen z-90 py-4'>
            <div className='flex justify-between'>
                <a href={"/"}>
                    <img
                        src={image}
                        alt='/'
                        width={150}
                        height={150}
                        className='rounded-full h-20'
                    />
                </a>
                <ul className='md:flex flex-row justify-center items-center mx-auto gap-10 font-semibold text-2xl font-customFont hover:cursor-pointer hidden'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Navlink href={link.path}>
                                {link.title}
                            </Navlink>
                        </li>
                    ))}
                </ul>
                <div className='mobile-menublock md:hidden flex justify-center items-center'>
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-blac'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="black">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    )}
                </div>
                <button onClick={handleLoginButtonClick} id='loginbtn' className='flex justify-center items-center bg-[#FFD700] hover:bg-[#ecd656] p-2 w-28 rounded-full h-10 mr-5 mt-5 font-semibold text-lg'>Login</button>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </header>
    )
}

