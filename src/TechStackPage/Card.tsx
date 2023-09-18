import React from 'react'

export const Card = ({ image, title, description, link }) => {
    return (
        <>
            <a href={link && link} target='_blank'>
                <div className='tech'>
                    <div className='left'>
                        <img src={image && image} className='image' />
                    </div>
                    <div className='right'>
                        <div>{title && title}</div>
                        <div>{description && description.slice(0, 26)}</div>
                    </div>
                </div>
            </a>
        </>
    )
}
