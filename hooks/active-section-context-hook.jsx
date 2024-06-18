import { ActiveSectionContext } from '@/context/active-section-context'
import React, {useContext} from 'react'

export default function useContextSection() {

    const context = useContext(ActiveSectionContext)
    if(context===null){
        throw new Error (
            'context within a provider'
        )
    }

  return context
}
