"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import useNavigationStyle from '@/hooks/header-style-navigation'

export default function Intro() {

    const { ref } = useNavigationStyle('Home', 0.5)

    return (
        <section ref={ref} id='home' className=' mb28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className='flex flex-col items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >
                        <Image
                            src='/poto.jpeg'
                            alt='Nicolas Foto'
                            width={192}
                            height={192}
                            quality={95}
                            priority={true}
                            className=' h-24 w-24 rounded-full object-cover shadow-xl border-[0.35rem] border-white'
                        />
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}

                        className='absolute bottom-0 right-0 text-4xl '>
                        👋
                    </motion.span>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    className=' mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'>
                    <span className="font-bold">Hola, mi nombre es Nicolás,</span> soy{" "}
                    <span className="font-bold">desarrollador front-end</span> con{" "}
                    <span className="font-bold">2 años</span> de experiencia. Disfruto crear <span className="italic">webs y aplicaciones</span>. Mi especialidad es{" "}
                    <span className="underline">React (Next.js)</span>.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1
                    }}
                    className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-base font-medium'>
                    <Link
                        className=' group bg-gray-900 text-white py-3 px-7 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                        href="#contact">
                        Contáctame ahora <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                    </Link>
                    <a
                        className='group bg-white py-3 px-7 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10  dark:text-white/60'
                        href='/CV.pdf'
                        download
                    >Descargar CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' /> </a>
                    <a href='https://www.linkedin.com/in/nicolaslamberto/' target='_blank' className=' bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'><BsLinkedin /> </a>
                    <a href='https://github.com/nicolamberto' target='_blank' className=' bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'><FaGithubSquare /> </a>
                </motion.div>
            </div>
        </section>
    )
}
