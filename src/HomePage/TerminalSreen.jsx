import React from 'react'
import { Terminal } from '../components/terminal'
import { TerminalContextProvider } from 'react-terminal'

export const TerminalSreen = () => {
    return (
        <div className='terminal'>
            <TerminalContextProvider>
                <Terminal />
            </TerminalContextProvider>
        </div>
    )
}
