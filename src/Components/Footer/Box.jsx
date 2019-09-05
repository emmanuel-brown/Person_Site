import React from 'react'

const Box = (props) =>{
    return(
        <>
            <div className="box" id={props.name}>
                <div className="top"></div>
                    <div className="middle">
                        <h1>{props.name}</h1>
                    </div>
                <div className="bottom"></div>
            </div>
        </>
    )
}

export default Box