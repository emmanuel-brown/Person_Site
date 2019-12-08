import React, { useState }from 'react'
import { FaExternalLinkSquareAlt as Link } from 'react-icons/fa'

const Box = (props) =>{
    const [ top, setTop ] = useState(100)
    const [ middle, setMiddle ] = useState(100)
    const [ bottom, setBottom ] = useState(100)
    const [ change, setChange ] = useState(true)

    const timing = (pos) =>{
        let negative  = props.isLeft ? "-" : ""
        const moveTop = new Promise((resolve) =>{
            setTimeout(() => resolve(negative + pos) , 0)})
                .then(i => setTop(i))

        const moveMiddle = new Promise((resolve) =>{
            setTimeout(() => resolve(negative + pos) , 250)})
                .then(i => setMiddle(i))
            
        const moveBottom = new Promise((resolve) =>{
            setTimeout(() => resolve(negative + pos) , 500)})
                .then(i => setBottom(i))
    }

    
    const animate = () =>{
        change ? timing("0") : timing("100")
        setChange(!change)   
    }
    
    function Place(moveTo){
        this.style = {
            transform: `translateX(${moveTo}%)`,
            transition: ".5s ease transform"
        }
    }

    const topper = new Place(top)
    const middler = new Place(middle)
    const bottomer = new Place(bottom)
    
    return(
        <>
            <div className="box" id={props.name} onClick={() => animate()} >
                <div className="picture">
                    <img src={props.logo} height={props.imageSize} width={props.imageSize} alt={props.name}/>
                </div>   
                <div className="top" style={topper.style}></div>
                    <div className="middle" style={middler.style}>
                        <h2><a href={props.link} target="blank">{props.username} <Link style={{color: "#3F88C5"}}/></a></h2>
                    </div>
                <div className="bottom" style={bottomer.style}></div>
            </div>
        </>
    )
}

export default Box