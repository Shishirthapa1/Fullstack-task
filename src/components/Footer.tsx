import React from 'react'

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-white py-2 h-auto divide-[#555555] divide-y-2 md:divide-y-0 divide-x-0 md:divide-x-2 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/footerbg.jpg')" }}>

            <div className="text-left w-full lg:w-[45%] md:w-[50%] mb-6 h-full lg:py-15 md:py-14 py-12 md:px-7 px-6 lg:px-8 md:mb-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wider font-medium font-abeezee leading-tight">
                    Want to
                    <br className='sm:flex hidden' />
                    <span className='sm:ml-0 ml-2'>collaborate??</span>
                </h1>
            </div>

            <div className="lg:w-[55%] md:w-[50%] w-full text-left md:border-y-2 border-0 md:px-3 px-6 lg:px-4 py-2 h-full border-[#555555]">
                <div className='font-quicksand font-normal tracking-wide lg:text-xl md:text-lg text-base py-3'>
                    <p className="mb-2">Let's Connect</p>
                    <p className="mb-4">
                        Feel free to reach out for collaborations or just a friendly hello
                    </p>
                    <p className="md:text-3xl text-2xl lg:text-4xl mb-4">👋</p>
                    <button
                        className="inline-block sm:px-4 px-3 py-3 sm:py-4 bg-[#222222] cursor-pointer border-2 border-white text-white rounded-r-full rounded-l-0 lg:text-sm md:text-xs text-[10px] hover:bg-white hover:text-black transition duration-300 ease-in-out"
                    >
                        Send an Email
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer

