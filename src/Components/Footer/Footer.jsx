import React from 'react'
import Box from './Box'

const Footer = () =>{
    return(
        <section id="footer">
            <Box name="Github" username="Sall.star01" link="https://github.com/" animation={true} isLeft={true} imageSize="100em" logo="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg"/>
            <Box name="instagram" username="@Wellz1013" isLeft={false} imageSize="100em"  logo="http://www.transparentpng.com/thumb/logo-instagram/mEmWlw-logo-instagram-hd-image.png"/>
            <Box name="Email" username="EmmanuelBrown1310 @gmail.com" isLeft={true} />
            <Box name="Number" username="803-579-8542" isLeft={false} imageSize="150em" logo="https://www.shareicon.net/download/2017/05/06/885605_post.ico"/>
        </section>
    )
}

export default Footer