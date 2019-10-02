import React from 'react'
import Experience from './Experiences'

const description = () =>(
    <div id="description">
        <div>
            <h2>Coding Strong Suits</h2>
            <ul>
                <li>HTML</li>
                <li>SCSS</li>
                <li>Javascript</li>
                <li>ReactJs</li>
                <li>Node.Js</li>
                <li>Java</li>
                <li>MySQL</li>
                <li>SQL</li>
            </ul>
            <h2>Experience</h2>
            <ul>
                <Experience 
                    exp="Ecomerce App"
                    github="https://github.com/emmanuel-brown/ProductRN" 
                    site="https://stoic-johnson-039d68.netlify.com/"
                />
                <Experience 
                    exp="React Calendar"
                    github="https://github.com/emmanuel-brown/reactCalendar" 
                    site=""
                />
                <Experience 
                    exp="React Messaging App"
                    github="https://github.com/emmanuel-brown/react3" 
                    site="https://upbeat-mcclintock-0ec5b4.netlify.com/"
                />
            </ul>
        </div>
    </div>
)

export default description