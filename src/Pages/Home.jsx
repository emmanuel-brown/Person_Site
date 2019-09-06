import React from 'react';
import 'normalize.css'
import Navbar from '../Components/Navbar/Navbar'
import Headshot from '../Components/Home/Headshot'
import Footer from '../Components/Footer/Footer'
import Scroll from '../Components/Home/scroll'
import Bar from '../Components/GenUtils/Bar'
import '../Components/Home/home.scss'
import { useSwipeable, Swipeable } from 'react-swipeable'


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            position: 0,
        }
    }

    mover = (swipedUp) =>{
        let { position } = this.state
        if(swipedUp){
            position += 1
        } else{
            position -= 1
        }
        console.log(position)
        this.setState({ position })
    }

    render(){
        // const handlers = useSwipeable({
        //     onSwipedUp: () => window.location.href = "#footer",
        //     preventDefaultTouchmoveEvent: true,
        //     trackMouse: true
        //   });
        // const working = {
        //     onSwipedUp: () => console.log("going up"),
        //     onSwipedDown: () => console.log("going down")
        // }
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
                    <Scroll />
                </section>
                <Bar isTop={true} to="#firstView"/>
                <Footer />
                <Bar isTop={false}/>
            </Swipeable>
        
        )
    }
}

export default Home