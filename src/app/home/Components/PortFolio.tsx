"use client";
import Image from "next/image";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { useProjects } from "@/context/ProjectsContext";

const PortFolio = () => {
    const { projects } = useProjects();
    return (
        <div className="bg-home w-full py-2 px-global">
            <div className="w-full flex sm:flex-row flex-col items-center justify-between">
                <Image src="/images/simple.svg" alt="Portfolio" className="lg:size-[12rem] md:size-[10rem] sm:size-[8rem] size-[6rem]" width={100} height={100} />

                <div>
                    <Link
                        href=""
                        className="text-white font-abeezee lg:text-3xl md:text-2xl sm:text-xl text-lg hover:underline flex items-center gap-1 sm:gap-2"
                    >
                        <p>See the Portfolio</p>
                        <MdArrowRightAlt className="md:text-2xl text-xl lg:text-3xl" />

                    </Link>
                </div>
            </div>
            <div className="lg:py-16 md:py-14 py-10 md:px-0 sm:px-6 px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-6 gap-5 lg:gap-7">
                    {projects.slice(0, 5).map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                    <div className="bg-[#1e1e1e] rounded-xl border lg:h-[490px] md:h-[450px] sm:h-[400px] h-[300px] border-gray-700 p-5 flex flex-col items-center justify-center text-center font-quicksand hover:shadow-lg hover:shadow-black/30 transition-all duration-300">
                        <h3 className="lg:text-2xl md:text-xl sm:text-lg text-base font-medium text-white mb-2">
                            Couldn’t find what you need?
                        </h3>

                        <p className="md:text-sm sm:text-xs text-[10px] lg:text-base text-gray-300 mb-6">
                            Suggest a tutorial, course or video. I read & seek feedback/suggestion!
                        </p>

                        <button className="px-6 py-2 rounded-full md:text-xs text-[10px] lg:text-sm font-medium text-white bg-button-gradient hover:opacity-90 cursor-pointer transition">
                            Request Now →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortFolio;
