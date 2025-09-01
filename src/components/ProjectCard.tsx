import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectCardProps = {
    image?: string;
    category?: string;
    title: string;
};

const ProjectCard = ({ image, category, title, }: ProjectCardProps) => {
    return (
        <div className="relative bg-[#1e1e1e] rounded-xl border border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-black/30 lg:h-[490px] md:h-[450px] sm:h-[400px] h-[300px] transition-all duration-300">
            {image && (
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={250}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            <div className="relative font-quicksand z-10 p-5 flex flex-col h-full justify-end">
                {category && (
                    <span className="inline-block w-fit bg-button-gradient
px-5 py-2 mb-3 lg:text-sm md:text-xs text-[10px] font-medium text-white rounded-full">
                        {category}
                    </span>
                )}

                <h3 className="lg:text-2xl md:text-xl sm:text-lg tetx-base font-medium text-white mb-2">{title}</h3>

                <Link
                    href=""
                    className="inline-flex items-center md:text-xs text-[10px] lg:text-sm font-medium text-white hover:underline"
                >
                    View Detail →
                </Link>
            </div>
        </div>

    );
};

export default ProjectCard;
