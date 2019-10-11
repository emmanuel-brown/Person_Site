import React from 'react'
import Box from './Box'

const Footer = () =>{
    return(
        <>
            <section id="footer">
                <Box name="Github" username="Emmanuel-brown" link="https://github.com/" animation={true} isLeft={true} imageSize="100em" logo="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg"/>
                <Box name="LinkedIn" username="Emmanuel Brown" link="https://www.linkedin.com/in/emmanuel-brown-1a39b8186" isLeft={false} imageSize="100em"  logo="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png"/>
                <Box name="Email" username="EmmanuelBrown1310 @gmail.com" imageSize="100em" isLeft={true} logo="http://www.iconarchive.com/download/i98301/dakirby309/simply-styled/Gmail.ico" />
                <Box name="Number" username="803-579-8542" isLeft={false} imageSize="150em" logo="https://www.shareicon.net/download/2017/05/06/885605_post.ico"/>
                <div id="clicked">
                    <p>Click!!</p>
                </div>
            </section>
        </>
    )
}

export default Footer