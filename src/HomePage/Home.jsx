import React from 'react'
import { TerminalSreen } from './TerminalSreen'
import Section1 from './Section1'

export const Home = () => {
    document.title = "RohanDagale"

    return (
        <>
            <div className="home">
                <div className='section1'>
                    <Section1 />
                </div>
                <div className='section-2'>
                    <TerminalSreen />
                </div>
            </div>

        </>
    )
}
