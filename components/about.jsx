"use client"

import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import useNavigationStyle from '@/hooks/header-style-navigation'

export default function About() {

    const { ref } = useNavigationStyle('About')


    return (
        <motion.section
            className=' mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
            ref={ref}
        >
            <SectionHeading>Sobre mi</SectionHeading>
            <p className="mb-3">
                Luego de la pandemia, deicidí seguir mi pasión por el codigo. Me inscribí
                en un bootcamp de programacion y aprendí{" "}
                <span className="font-medium">desarrollo web full-stack</span>. A dia de hoy me encuentro
                perfeccionando mis habilidades en el front-end{" "}
                <span className="italic">Mi parte favorita</span> es la resolución de problemas.{" "}
                <span className="underline">No reinvento la rueda</span>, uso las herramientas
                necesarias para llegar a resultados eficaces, con un código limpio, organizado, optimizado
                y entendible. Mi core stack es{" "}
                <span className="font-medium">
                    React y Next.js
                </span>
                . A su vez estoy familiarizado con librerías de diseño para complementar estas tecnologías,
                como {" "}<span className="font-medium">
                    Bootsrap, Material UI y Tailwind CSS
                </span>. Actualmente me encuentro en busqueda de una{" "}
                <span className="font-medium">posición a tiempo completo</span> como desarrollador
                de software.
            </p>

            <p>

            </p>
        </motion.section>
    )
}
