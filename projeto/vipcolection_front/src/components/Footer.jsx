import img from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className='bg-zinc-900 text-white p-2 mt-1'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 py-7'>
            <div className='md:flex-1 flex justify-center'>
                <img src={img} alt="logo marca" className="w-56" />
            </div>
            <div className="md:flex-1 flex flex-col gap-3 justify-center mb-5">
                <h1 className='text-3xl text-[#d4af37] font-sans font-bold text-center'>Links:</h1>
                <ul className='text-lg font-sans font-semibold flex flex-row justify-center items-center text-center gap-2'>
                    <li className="flex flex-row gap-3" >
                        <ul>Contato</ul>
                        <ul>Sobre</ul>
                        <ul>Links</ul>
                    </li>
                </ul>
            </div>
            <div className='md:flex-1 flex flex-col gap-3 justify-center mb-5'>
                <div className='flex flex-col justify-center '>
                   <h1 className="text-xl font-sans font-bold">Informações</h1>
                    <div className="flex flex-col mt-2 text-lg font-bold text-zinc-500">
                        <p>Endereço: Rua do Sobe e Desce, 23</p>
                        <p>Telefone: {'(21) 98672-1385'}</p>
                        <p>Email: vipcolection.contato@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer