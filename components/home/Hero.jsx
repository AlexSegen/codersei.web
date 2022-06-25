/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import { useConfig } from '../../hooks/useConfig';

import Link from "next/link"

const Hero = () => {

    const { darkMode } = useConfig();

    return (
        <section className={`container mx-auto max-w-7xl ${darkMode ? 'bg-slate-900 text-gray-300':''}`}>
            <div className="items-center justify-center block py-20 lg:flex">
                <div className="px-10">
                    <div>
                        <img className="block mx-auto rounded-full shadow-lg w-28 h-28 md:w-48 md:h-48 shadow-gray-700/50" src="/images/avatar.jpg" alt="Alejandro's Photo" />
                    </div>
                </div>
                <div className="px-10 text-center md:text-left">
                    <h1 className="mb-3 text-3xl font-bold md:text-4xl">Alejandro Vivas</h1>
                    <p className="mb-5"> <span className="text-gray-400">Software Engineer at </span>  
                        <a target="_blank"
                            rel="noreferrer" 
                            href="https://carsales.com.au/" 
                            className={`font-semibold hover:underline ${darkMode ? 'text-cyan-500 ':'text-gray-900 '}`} >
                            Carsales.com Limited
                        </a>
                    </p>
                
                    <p className="mb-5 text-gray-400">Let's talk about HTML |  React | Vue | Node | Web design | UI/UX design | beign productive and much more.</p>

                    <Link href="/about">
                        <a className="font-semibold hover:underline">More about me? 
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )

}

export default Hero