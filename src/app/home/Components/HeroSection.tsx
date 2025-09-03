import React from "react";

const HeroSection = () => {
    return (
        <div
            style={{
                background: `url('/images/homebg.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative flex items-center justify-start lg:pl-44 md:pl-24 sm:pl-10 pl-4 pr-4 sm:pr-0 min-h-screen"
        >
            <div className="max-w-4xl text-left lg:space-y-20 md:space-y-16 space-y-12">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-abeezee text-white leading-tight">
                    FROM DARKNESS TO THE <br /> DAWN, IDEAS TAKE FLIGHT.
                </h1>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl lg:ml-10 md:ml-8 ml-4">
                    Hi, I am <span className="font-bold">John Doe.</span> Welcome to my
                    portfolio.
                </p>

                <a
                    href="/ShishirThapa_Resume.pdf"
                    download
                    className="inline-block rounded-l-0 rounded-r-4xl border border-gray-400 lg:px-6 md:px-5 px-3 md:py-4 py-3 lg:text-base md:text-sm text-xs text-white hover:bg-white lg:ml-10 md:ml-8 ml-4 hover:text-black transition ease-in-out duration-300"
                >
                    Download resume
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
