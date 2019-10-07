import React from 'react'
import HeadShot from './headShot1.jpeg'

const Headshot = () =>{
    return(
        <>
        <div id="headShot">
            <img src={ HeadShot } alt=""/>
        </div>
        <div id="position">
            <h1>Junior Full Stack Engineer</h1>
        </div>
        </>
    )
}

export default Headshot;