import Link from "next/link";
import React from "react";

const AboutMe = () => {
    return (
        <section className="bg-home text-white py-20 px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-abeezee font-medium leading-tight mb-3">
                    NAMASTE <span className="inline-block">🙏</span>
                    <br />
                    I&apos;M JOHN DOE
                </h1>

                <div className="flex flex-col pl-9 pt-1">
                    <p className="text-gray-300 font-medium font-quicksand lg:text-base md:text-sm text-xs mb-4">
                        Tell about your intro and story
                    </p>

                    <div className="border-t-2 border-dotted border-gray-500 w-full lg:mb-6 md:mb-5 mb-4" />
                    <div className="border-t-2 border-dotted border-gray-500 w-[95%] lg:mb-12 md:mb-10 mb-8" />

                    <Link
                        href="https://www.bhansamart.com"
                        className="inline-flex items-center font-abeezee lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium hover:underline"
                    >
                        Let’s know more →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
