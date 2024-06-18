import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 ox4
     text-center text-gray-500'>
      <small className='mb-2 block text-xs'>
        &copy; 2024 Nicolas. All rights reserved.
      </small>
      <p className=' text-xs'>
        <span className=' font-semibold'>
          About this website:
        </span>
        built with React & Next.js (App Router & Server Actions), Tailwind CSS, Framer Motion, Resend, Vercel hosting.
      </p>
    </footer>
  )
}
