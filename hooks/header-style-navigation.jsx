import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useContextSection from './active-section-context-hook'

export default function useNavigationStyle(sectionName, threshold = 0.75) {
    
    const { ref, inView } = useInView({threshold})
    const { setActiveSection } = useContextSection()

    useEffect(() => {
        if (inView) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection])

    return {ref}
}
