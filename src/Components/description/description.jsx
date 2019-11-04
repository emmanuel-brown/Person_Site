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
                <li>Mongoose</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>SQL</li>
            </ul>
            <h2>Experience</h2>
            <ul>
                <Experience 
                    exp="React Messaging App"
                    github="https://github.com/emmanuel-brown/react3" 
                    site="https://upbeat-mcclintock-0ec5b4.netlify.com/"
                />
                <Experience 
                    exp="Ecomerce App"
                    github="https://github.com/emmanuel-brown/ProductRN" 
                    site="https://stoic-johnson-039d68.netlify.com/"
                />
                <Experience 
                    exp="React Calendar"
                    github="https://github.com/emmanuel-brown/reactCalendar" 
                    site="https://optimistic-cori-69b414.netlify.com/"
                />
                <Experience 
                    exp="React Geussing Game"
                    github="https://github.com/emmanuel-brown/react3" 
                    site="https://dreamy-tereshkova-06218a.netlify.com/React2/game"
                />
            </ul>
        </div>
    </div>
)

export default description
