import React from 'react'
import Box from './Box'

const Footer = () =>{
    return(
        <section id="footer">
            <Box name="SnapChat" animation={true} isLeft={true}/>
            <Box name="instagram" isLeft={false}/>
            <Box name="Email" isLeft={true} />
            <Box name="Number" isLeft={false}/>
        </section>
    )
}

export default Footer