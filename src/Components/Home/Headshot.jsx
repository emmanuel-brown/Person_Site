import React from 'react'
import HeadShot from './personal.jpeg'

const Headshot = () =>{
    const position = "Junior Full Stack".split("")

    const letters = position.map((letter, i) =>{
        return i%2 === 0 ? <span key={i} className="a">{letter}</span> :
            <span key={i} className="b">{letter}</span>
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