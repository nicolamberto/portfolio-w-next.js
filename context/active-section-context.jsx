"use client"

import React, { createContext, useState } from 'react'
export const ActiveSectionContext = createContext()


export default function ActiveSectionContextProvider({ children }) {

  const [activeSection, setActiveSection] = useState('Home')

  return (

    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }} >
      {children}
    </ActiveSectionContext.Provider>
  )
}
