

export function Cards() {
    return (
        <div className='gap-6 bg-zinc-50/15 flex flex-wrap items-center justify-center max-w-screen-2xl max-h-full'>

            {Array.from({length : 6}).map((i) => {

                <div key={i} className='w-80 h-96 bg-zinc-50/80 shadow-[0_0_2px_black] rounded-lg p-3'>
                    <img src='/' alt="" className="bg-black/5 w-full h-56 rounded-lg " />
                    <div>
                        <h1>Nome</h1>
                        <div className='flex'>
                            <p>
                                informacoe
                            </p>
                            <p>
                                R$00,00
                            </p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}