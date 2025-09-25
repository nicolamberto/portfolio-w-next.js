"use client"

import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import useNavigationStyle from '@/hooks/header-style-navigation'

export default function About() {

    const { ref } = useNavigationStyle('About')


    return (
        <motion.section
            className=' mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28 2xl:text-xl text-black/80 2xl:leading-9'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
            ref={ref}
        >
            <SectionHeading>Sobre mi</SectionHeading>
            <p className="mb-3 text-justify dark:text-white/70">
                Desarrollador Front-End especializado en <span className='font-bold'>React.js y Next.js</span> con 3,5 años de experiencia. Creo interfaces intuitivas desde cero o reproduzco diseños “pixel-perfect” trabajando con equipos de UX/UI <span className='font-bold'>(100% responsive)</span>. Me enfoco en rendimiento, accesibilidad y código limpio, reutilizable y bien documentado. Integro la <span className='font-bold'>IA como copiloto para acelerar sin perder calidad</span> y he implementado APIs de IA (chatbots) en producción. En back-end, utilizo Supabase cuando se requiere base de datos/SSR y Strapi para CMS autogestionable; también trabajo sobre principios REST con equipos front–back separados.
            </p>

            <p>

            </p>
        </motion.section>
    )
}
