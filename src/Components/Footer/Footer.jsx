import React from 'react'
import Box from './Box'

const Footer = () =>{
    return(
        <section id="footer">
            <Box name="Github" username="Emmanuel-brown" link="https://github.com/" animation={true} isLeft={true} imageSize="100em" logo="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg"/>
            <Box name="LinkedIn" username="Emmanuel Brown" link="https://www.linkedin.com/in/emmanuel-brown-1a39b8186" isLeft={false} imageSize="100em"  logo="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png"/>
            <Box name="Email" username="EmmanuelBrown1310 @gmail.com" link={`mailto: emmanuelbrown1310@gmail.com`} imageSize="100em" isLeft={true} logo="http://www.iconarchive.com/download/i98301/dakirby309/simply-styled/Gmail.ico" />
            <Box name="Number" username="803-579-8542" isLeft={false} imageSize="150em" logo="https://icon-icons.com/icons2/1462/PNG/256/089hash_99879.png"/>
            <div id="clicked">
                <p className="press">Press!!</p>
                <p className="click">Click!!</p>
            </div>
        </section>
    )
}

export default Footer