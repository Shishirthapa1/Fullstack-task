import React from "react";
import Image from "next/image";

const OutputSection = () => {
    return (
        <div className="relative flex items-center justify-center py-10 lg:h-[50vh] md:h-[40vh] h-[30vh] w-full">
            <div className="absolute top-1/5 left-1/2 -translate-x-1/2 w-1/2 z-10 h-[2px] bg-[#555555] opacity-40" />

            <div className="absolute bottom-1/5 left-1/2 -translate-x-1/2 w-1/2 z-10 h-[2px] bg-[#555555] opacity-40" />

            <div className="absolute inset-0 flex justify-center items-center opacity-70">
                <Image
                    src="/images/moon.png"
                    alt="Moon"
                    width={500}
                    height={500}
                    className="object-contain object-center h-full w-full"
                />
            </div>

            {/* Text */}
            <div className="relative flex w-full justify-between text-white md:text-5xl text-2xl sm:text-4xl lg:text-7xl font-light tracking-wider">
                <span className="font-normal absolute left-0 bottom-0">LESS DOUBT</span>
                <span className="font-normal absolute right-0 top-0">MORE OUTPUT</span>
            </div>
        </div>

    );
};

export default OutputSection;
