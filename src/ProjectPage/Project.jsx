import React from 'react'
import { Card } from './Card'
import { Data } from './Data'

export const Project = () => {
    document.title = "RohanDagale - Project"
    return (
        <>
            <div className="project">
                {
                    Data.map((card) => {
                        return (
                            <React.Fragment key={card.id}>
                                <Card link={card.link} image={card.image} title={card.title} description={card.description} tech={card.tech} />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </>
    )
}
