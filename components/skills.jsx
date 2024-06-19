"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import useNavigationStyle from '@/hooks/header-style-navigation'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}

export default function Skills() {

  const { ref } = useNavigationStyle('Skills')

  return (
    <section
      id='skills'
      ref={ref}
      className=' mb-28 max-w-[46rem] scroll-mt-28 text-center sm:mb-40 '
    >
      <SectionHeading>skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {
          skillsData.map((item, index) => (
            <motion.li variants={fadeInAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true }} custom={index} className='bg-white border border-black/[0.1] rounded-xl py-3 px-5 dark:bg-white/10 dark:text-white/80' key={index}>{item}</motion.li>
          ))
        }
      </ul>
    </section>
  )
}
