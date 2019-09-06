import React, { useState }from 'react'

const Box = (props) =>{
    const [ top, setTop ] = useState(0)
    const [ middle, setMiddle ] = useState(0)
    const [ bottom, setBottom ] = useState(0)
    const [ change, setChange ] = useState(true)

    const timing = (pos1, pos2, pos3) =>{
        let negative  = props.isLeft ? "-" : ""
        const moveTop = new Promise((doIt) =>{
            setTimeout(() =>{
                doIt(negative + pos1)
            }, 0)
        })
        const moveMiddle = new Promise((doIt) =>{
            setTimeout(() =>{
                doIt(negative + pos2)
            }, 250)
        })
        const moveBottom = new Promise((doIt) =>{
            setTimeout(() =>{
                doIt(negative + pos3)
            }, 500)
        })
        moveTop.then(i => setTop(i))
        moveMiddle.then(i => setMiddle(i))
        moveBottom.then(i => setBottom(i))
    }

    const animate = () =>{
        if(change){
            timing("100", "100", "100")
        } else if (change === false){
            timing("0", "0", "0")
        }
        console.log(change)
        setChange(!change)
    }

    const topStyle = {
        transform: `translateX(${top}%)`,
        transition: "1s ease all"
    }
    const middleStyle = {
        transform: `translateX(${middle}%)`,
        transition: "1s ease all"
    }
    const bottomStyle = {
        transform: `translateX(${bottom}%)`,
        transition: "1s ease all"
    }
    return(
        <>
            <div className="box" id={props.name} onClick={() => animate()}>
                <div className="something"></div>
                <div className="top" style={topStyle}></div>
                    <div className="middle" style={middleStyle}>
                        <h1>{props.name}</h1>
                    </div>
                <div className="bottom" style={bottomStyle}></div>
            </div>
        </>
    )
}

export default Box