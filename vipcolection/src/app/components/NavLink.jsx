import Link from "next/link";

const Navlink = ({href, title}) => {
    return (
        <Link 
            href={href} 
                className='block py-2 pl-3 pr-4 font-customFont3 font-semibold text-[#FFD700] sm:text-2xl  md:p-0 hover:text-zinc-700' >
            {title}
        </Link>
    )
}

export default Navlink;