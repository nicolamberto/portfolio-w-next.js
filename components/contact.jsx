"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import useNavigationStyle from '@/hooks/header-style-navigation'
import { sendEmail } from '@/actions/sendEmails'

export default function Contact() {

    const { ref } = useNavigationStyle('Contact')


    return (
        <motion.section
            ref={ref}
            id='contact'
            className=' text-center mb-20 sm:mb-28 w-[min(100%, 38rem)] '
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className=' text-gray-700 -mt-6 dark:text-white/70'>Please contact me directly at <a className='underline' href='mailto:nicolaslamberto2840@gmail.com'>nicolaslamberto2840@gmail.com</a> or trough this form</p>

            <form action={async (formData) => {
                await sendEmail(formData)
            }}
                className=' mt-10 flex flex-col'>
                <input name='senderEmail' required placeholder='Your e-mail' className=' dark:bg-gray-800 h-14 p-4 rounded-lg border border-black/10 ' type='email' />
                <textarea name='message' required placeholder='Your message' className='dark:bg-gray-800 p-4 h-52 my-3 rounded-lg border border-black/10' />
                <button className='group flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'>Submit <FaPaperPlane className='group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70  transition-all' />{" "} </button>
            </form>

        </motion.section>
    )
}
