import React from 'react'
import Stack from "./Stack"

const Section1 = () => {
    const [show, setShow] = React.useState(false)
    console.log(show)
    return (
        <>
            <div className='name'>
                Hello, <span className="rohan">Rohan Here</span>
            </div>
            <div className='title' onClick={() => setShow(!show)}>
                {show == false ? (
                    <>
                        I'm a<span className="rohan">&nbsp;Web Developer</span>
                    </>
                ) : (
                    <>
                        Nahh!... I'm {" "}<span className="rohan">&nbsp;Just Lazy</span>
                    </>
                )}
            </div>
            <div>
                <p className="desc">A passionate and dedicated software developer with a keen interest in crafting innovative digital solutions. I've had the privilege of working on a diverse range of projects that highlight my expertise in JavaScript, Framework like ReactJS and NextJS and Technologies like MongoDB, Supabase, GitHub version control and NodeJS</p>
            </div>
            <div className="tech-stack">
                <Stack />
            </div>
        </>
    )
}

export default Section1