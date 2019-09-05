import React from 'react'
import { 
    FaAngleDown,
    FaAngleDoubleDown
} from 'react-icons/fa'

const Scroll = () =>{
    return(
        <>
            <div id="scroll">
                <p>Click Here</p>
                <a href="#footer">
                    <div className="arrows">
                        <FaAngleDown className="arrow_1"/>
                        <FaAngleDoubleDown className="arrow_2"/>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Scroll;