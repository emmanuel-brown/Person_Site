import React from 'react'
import './skills.scss'

const skillList2 = [
    "HTML",
    "SCSS",
    "Javascript",
    "ReactJs",
    "Node.Js",
    "Mongoose",
    "MongoDB",
    "MySQL",
    "SQL",
]

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
    Placement("HTML", 10, 25, 45, 3.5),
    Placement("SCSS", 70, 16, -45, 3.5),
    Placement("JS", 60, 60, 15, 3),
    Placement("ReactJs", 10, 50, 15, 4),
    Placement("Node.Js", 30, 50, 3.6, 3.8),
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