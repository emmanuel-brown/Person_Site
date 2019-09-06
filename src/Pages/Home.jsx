import React from 'react';
import 'normalize.css'
import Navbar from '../Components/Navbar/Navbar'
import Headshot from '../Components/Home/Headshot'
import Footer from '../Components/Footer/Footer'
import Scroll from '../Components/Home/scroll'
import Bar from '../Components/GenUtils/Bar'
import '../Components/Home/home.scss'
import { Swipeable } from 'react-swipeable'


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            position: 0, //this is to determine where the site is
        }
    }

    mover = (swipedUp) =>{
        let { position } = this.state
        let canMoveUp = position >= 0
        let canMoveDown = position < 1

        if(swipedUp && canMoveDown){
            position += 1
            
        } else if(!swipedUp && canMoveUp) {
            position -= 1
        } 
        this.setState({ position })
    }

    render(){
        const SwipeStyle = {
            transform: `translate3d(0px, -${this.state.position}00vh, 0px)`, 
            transition: '1s ease all'
        }
        return(
            <Swipeable 
            onSwipedUp={() => this.mover(true)} 
            onSwipedDown={() => this.mover(false)} 
            style={SwipeStyle}>
                <section id="firstView">
                    <Navbar />
                    <Headshot />
                    <Scroll clicked={() => this.mover(true)}/>
                </section>
                <section id="secondView">

                </section>
                <footer>
                    <Bar isTop={true} clicked={() => this.mover(false)} />
                    <Footer />
                    <Bar isTop={false}  />
                </footer>
            </Swipeable>
        )
    }
}

export default Home