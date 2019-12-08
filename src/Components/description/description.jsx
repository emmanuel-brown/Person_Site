import React from 'react'
import Experience from './Experiences'

const description = () =>(
    <div id="description">
        <div>
            <h2 className="header">Coding Strong Suits</h2>
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
            <h2 className="header">Experience</h2>
            <div className="expieriences">
                <Experience
                    pic="./images/commentingApp.png"
                    exp="React Messaging App"
                    github="https://github.com/emmanuel-brown/react3" 
                    site="https://upbeat-mcclintock-0ec5b4.netlify.com/"
                />
                <div></div>
                <Experience
                    pic="./images/ecommerceApp.png"
                    exp="Future Fancy"
                    github="https://github.com/emmanuel-brown/Ecomerce_Mongo" 
                    site="https://futurefancy.herokuapp.com/"
                />
                <Experience 
                    pic="./images/reactCalendar.png"
                    exp="React Calendar"
                    github="https://github.com/emmanuel-brown/reactCalendar" 
                    site="https://optimistic-cori-69b414.netlify.com/"
                />
                <div></div>
                <Experience
                    pic="./images/guessGame.png"
                    exp="React Geussing Game"
                    github="https://github.com/emmanuel-brown/ReactChallenges12/blob/master/src/components/react2/game/GamePlay.jsx" 
                    site="https://dreamy-tereshkova-06218a.netlify.com/React2/game"
                />
            </div>
        </div>
    </div>
)

export default description
