import React from 'react';
import 'normalize.css'
import Navbar from '../Components/Navbar/Navbar'
import Headshot from '../Components/Home/Headshot'
import Footer from '../Components/Footer/Footer'
import Scroll from '../Components/Home/scroll'
import Bar from '../Components/GenUtils/Bar'
import '../Components/Home/home.scss'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: "",
        }
    }
    render(){
        return(
            <div>
                <Navbar />
                <section id="firstView">
                    <Headshot />
                    <Scroll id="thingy"/>
                </section>
                <Bar isTop={true} onClick={this.clicker} to="#title"/>
                <Footer />
                <Bar isTop={false}/>
            </div>
        )
    }
}