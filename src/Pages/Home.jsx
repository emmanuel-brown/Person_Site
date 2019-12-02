import React, { useState } from 'react';
import 'normalize.css'
import Navbar from '../Components/Navbar/Navbar'
import Headshot from '../Components/Home/Headshot'
import Scroll from '../Components/Home/scroll'
import Skills from '../Components/Skills/Skills'
import Resume from '../Components/Resume/Resume'
import Footer from '../Components/Footer/Footer'
import Bar from '../Components/GenUtils/Bar'
import Description from '../Components/description/description'
import '../Components/Home/home.scss'
import { Swipeable } from 'react-swipeable'


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            position: 0, //this is to determine where the site is
        }
    }

    componentWillUnmount(){
        window.location.href = '/#firstView'
    }

    mover = (swipedUp) =>{
        let { position } = this.state
        let canMoveUp = position < 0
        let canMoveDown = position > -3 // must be negative
        if(swipedUp && canMoveDown){
            position -= 1 
        } else if(!swipedUp && canMoveUp) {
            position += 1
        } 
        this.setState({ position })
    }

    render(){
        const SwipeStyle = {
            transform: `translate3d(0, ${this.state.position}00vh, 0)`, 
            transition: '1s ease all'
        }
        return(
            <Swipeable 
                onSwipedUp={() => this.mover(true)} 
                onSwipedDown={() => this.mover(false)} 
                style={SwipeStyle}
                preventDefaultTouchmoveEvent= {false}>
                <section id="firstView">
                    <Navbar />
                    <Headshot />
                    <Skills />
                    <Scroll clicked={() => this.mover(true)}/>
                </section>
                <section id="secondView">
                    <Bar isTop={true} clicked={() => this.mover(false)}/>
                    <Description />
                    <Bar isTop={false} clicked={() => this.mover(true)}/>
                </section>
                <section id="thirdView">
                    <Bar isTop={ true } clicked={() => this.mover(false)}/>
                    <Resume />
                    <Bar isTop={ false } clicked={() => this.mover(true)}/>
                </section>
                <footer>
                    <Bar isTop={true} clicked={() => this.mover(false)} />
                    <Footer />
                    <Bar isLast={true} clicked={() => this.setState({position: 0})} />
                </footer>
            </Swipeable>
        )
    }
}

export default Home