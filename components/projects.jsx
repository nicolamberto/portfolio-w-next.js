"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import useNavigationStyle from '@/hooks/header-style-navigation'

export default function Projects() {

    const { ref } = useNavigationStyle('Projects', 0.5)


    return (
        <section ref={ref} id='projects' className=' scroll-mt-28 mb-28'>
            <SectionHeading>mis proyectos</SectionHeading>
            <div>
                {projectsData.map((item, index) => (
                    <React.Fragment key={index}>
                        <Project {...item} />
                    </React.Fragment>

                ))}
            </div>
        </section>
    )
}

