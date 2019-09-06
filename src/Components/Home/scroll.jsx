import React from 'react'
import { 
    FaAngleDown,
    FaAngleDoubleDown
} from 'react-icons/fa'

const Scroll = (props) =>{
    return(
        <>
            <div id="scroll" onClick={props.clicked}>
                <p>Swipe Here</p>
                    <div className="arrows">
                        <FaAngleDown className="arrow_1"/>
                        <FaAngleDoubleDown className="arrow_2"/>
                    </div>
            </div>
        </>
    )
}

export default Scroll;