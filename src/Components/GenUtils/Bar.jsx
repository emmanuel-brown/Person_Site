import React from 'react'
import { 
    FaAngleDown,
    FaAngleUp
} from 'react-icons/fa'

const Bar = (props) =>{
    return(
        <div onClick={props.clicked}>
            <div className="bar">
                    {
                        props.isLast ? <div className="lastly">Back To Top</div> :
                        props.isTop ? <FaAngleUp className="bar_top" /> : <FaAngleDown className="bar_bottom" />
                    }
            </div>
        </div>
    )
}

export default Bar