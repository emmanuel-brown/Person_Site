import React from 'react'
import HeadShot from './headShot1.jpeg'

const Headshot = () =>{
    const position = "Junior Web Developer".split("")

    const letters = position.map((letter, i) =>{
        return i%2 === 0 ? <span className="a">{letter}</span> :
            <span className="b">{letter}</span>
    })

    return(
        <>
        <div id="headShot">
            <img src={ HeadShot } alt=""/>
        </div>
        <div id="position">
            <h1>{ letters }</h1>
        </div>
        </>
    )
}

export default Headshot;