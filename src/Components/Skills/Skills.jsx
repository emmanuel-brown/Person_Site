import React from 'react'
import './skills.scss'

function Placement(word, x, y, rotate, size, fontSize = 3){
    const position = {
        top: `${y}%`,
        left: `${x}%`,
        transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`,
        fontSize: `${fontSize}em`,
        width: `${size}em`,
        height: `${size}em`,
    }
    return(
        <div className="skills-skill" style={position}><p>{word}</p></div>
    )
}

const skillList = [
    Placement("HTML", 5, 20, 45, 3.5),
    Placement("SCSS", 70, 16, -45, 3.5),
    Placement("JS", 60, 60, 15, 3),
    Placement("ReactJs", 16, 53, 15, 4),
    Placement("Node.Js", 15, 40, 3.6, 3.8),
    Placement("MongoDB", 65, 40, 3.6, 5, 2),
    // Placement("MongoDB", 65, 40, 3.6, 3.8),
]

const Skills = () => {
    return(
        <div className="skills">
            {skillList.map(lang => lang)}
        </div>
    )
}

export default Skills