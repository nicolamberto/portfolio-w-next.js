import React from 'react'

export default function SectionHeading({ children }) {
  return (
    <h2 className=' text-3xl 2xl:text-4xl font-medium capitalize mb-8 2xl:mb-12 text-center dark:text-white/90'>
      {children}
    </h2>
  )
}
