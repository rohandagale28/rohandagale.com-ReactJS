import React from 'react'
import jslogo from '../assets/js-logo.jpg'
import reactlogo from '../assets/react-logo.png'
import nodelogo from '../assets/node-logo.png'
import reduxlogo from '../assets/redux-logo.png'
import htmllogo from '../assets/html-logo.png'
import csslogo from '../assets/css-logo.png'
import firebase from '../assets/firebase-logo.png'
import mongo from '../assets/mongo-logo.png'
import ts from '../assets/ts-logo.png'
import figma from '../assets/figma-logo.png'
import git from '../assets/git-logo.png'


const Stack = () => {
    return (
        <>
            <div style={{ width: "100%", display: 'flex', flexDirection: "row", gap: "1.6rem", flexWrap: 'wrap', margin: "0rem 2rem", alignItems: "center", justifyContent: "center" }}>
                <a href="https://www.javascript.com/" target='_blank'>
                    <img src={jslogo} alt='logo' className='image-js image' />
                </a>
                <a href="" target='_blank' >
                    <img src={htmllogo} alt='logo' className='image-react image' />
                </a>
                <a href="" target='_blank'>
                    <img src={csslogo} alt='logo' className='image-react image' />
                </a>
                <a href="" target='_blank'>
                    <img src={reactlogo} alt='logo' className='image-react image' />
                </a>
                <a href="" target='_blank'>
                    <img src={nodelogo} alt='logo' className='image-react image' />
                </a>
                <a href="" target='_blank'>
                    <img src={reduxlogo} alt='logo' className='image-react image' />
                </a>
                <a href="" target='_blank'>
                    <img src={firebase} alt='logo' className='image-react image' />
                </a>
                <a href="" target='_blank'>
                    <img src={mongo} alt='logo' className='image-react image' />
                </a>
                <a href="" target='_blank'>
                    <img src={ts} alt='logo' className='image-react image' />
                </a>
                <a href="" target='_blank'>
                    <img src={figma} alt='logo' className='image-react image' />
                </a>
            </div>
        </>
    )
}

export default Stack