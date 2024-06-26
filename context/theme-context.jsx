import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export default function ThemeContext({ children }) {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light')
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        if (localTheme) {
            setTheme(localTheme)
            if (localTheme === 'dark') {
                document.documentElement.classList.add('dark')
            }
        }
    }, [])



    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
