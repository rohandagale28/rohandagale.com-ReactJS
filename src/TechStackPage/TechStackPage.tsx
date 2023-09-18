import React from 'react'
import { Data } from './Data'
import { Card } from './Card'

export const TechStackPage = () => {
    return (
        <>
            <div className='techstack'>
                <div style={{ position: "absolute", top: "6.4rem", fontSize: "1.4rem", textAlign: "center", color:"#999999" }}>Programing Languages, Frameworks, Tools & Software</div>
                {Data.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            <Card image={item.image} title={item.title} description={item.description} link={item.link} />
                        </React.Fragment>
                    )
                })}
            </div>
        </>
    )
}
