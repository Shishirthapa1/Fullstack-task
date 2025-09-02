'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { usePathname } from 'next/navigation'
import { BiSolidUpArrow } from 'react-icons/bi'

const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/play', label: 'Play' },
]

export default function NavBar() {
    const ref = useRef<HTMLDivElement>(null)
    const pathname = usePathname()

    useEffect(() => {
        if (!ref.current) return
        gsap.fromTo(
            ref.current.children,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power2.out' }
        )
    }, [])

    return (
        <div className="relative mt-6 z-40 lg:h-[4rem] md:h-[3.5rem] h-[3rem] flex w-full justify-center px-global">
            <nav
                ref={ref}
                className="flex w-full items-center md:justify-end justify-between md:gap-16 gap-0 rounded-full border border-white/20 bg-white md:p-1 p-[2px] shadow-lg font-quicksand"
            >
                <div className="mx-auto md:mx-0 flex items-center lg:gap-16 md:gap-12 gap-4 font-semibold py-2 md:text-xs text-[10px] lg:text-sm text-black">
                    {links.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <div key={link.href} className="relative flex flex-col items-center">
                                <Link
                                    href={link.href}
                                    className={`hover:opacity-80 relative ${isActive ? 'text-black' : 'text-gray-700'}`}
                                >
                                    {link.label}
                                </Link>
                                {isActive && (
                                    <BiSolidUpArrow className="text-gray-800 md:translate-y-5
                                        translate-y-4 absolute animate-bounce w-2 h-2 md:w-2 md:h-2 lg:w-3 lg:h-3"
                                        width="12"
                                        height="12"
                                    />

                                )}
                            </div>
                        )
                    })}
                </div>

                <Link
                    href="/login"
                    className="rounded-r-full bg-[#222222] h-full text-center px-3 md:px-5 py-[6px] md:py-2 lg:text-sm md:textxs text-[10px] font-medium text-white hover:opacity-80 font-quicksand flex items-center"
                >
                    <p>Follow me</p>
                </Link>
            </nav>
        </div>
    )
}
