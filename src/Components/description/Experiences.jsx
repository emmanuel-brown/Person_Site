import React, { useState } from 'react'
import { 
    FaCaretDown
} from 'react-icons/fa'

import picture from './Resume.png'

const Experiences = (props) =>{
    const [site, setSite] = useState(false)

    const movement = {
        opacity: site ? 1 : 0,
        transform: `translateY(${site ? "0px" : "-10px" })`,
        fontSize: site ? "inherit" : "0px",
        transition: "1s ease all"
    }

    const flipCaret = {
        color: "#FFBA08",
        transform: `rotate(${site ? '180deg' : '0deg'})`,
        transition: '1s ease all'
    }

    const shrink = {
        fontSize: `${site ? "0px" : "inherit"}`,
        transition: '1s ease all'
    }
    return (
        <React.Fragment>
            <div className="exp" onClick={() => setSite(!site)}>
                <div className="exp-image">
                    <img src={props.pic} alt=""/>
                </div>
                <div className="exp-lineUp">
                    <p className="exp-lineUp-name"style={shrink}>{props.exp}</p> 
                    <div className="exp-caret"><FaCaretDown style={flipCaret}/></div>
                </div>
                <div className="exp-sites" style={movement}>
                    <a href={props.github} target="blank" style={{ display: `${props.github === "" ? "none" : "block"}`}}>
                        <p>Github</p>
                    </a>
                    <a href={props.site} target="blank" style={{display: props.site === "" ? "none" : "block"}}>
                        <p>Site</p>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Experiences