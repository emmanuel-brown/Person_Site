import React from 'react'
import { 
    FaAngleDown,
    FaAngleUp
} from 'react-icons/fa'

const Bar = (props) =>{
    return(
        <a href={props.to}>
            <div className="bar">
                    {props.isTop ? <FaAngleUp className="bar_top" /> : <FaAngleDown className="bar_bottom" />}
            </div>
        </a>
    )
}

export default Bar