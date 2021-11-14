import React, { Component } from 'react'
import './Home.css'
import homeimg1 from '../assets/images/homeimg1.jpg'
import homeimg2 from '../assets/images/homeimg2.jpg'
import homeimg3 from '../assets/images/homeimg3.jpg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <section className="section1">
                    <div className="header">
                        <h1 className="heading"> Organize it all<br /> with Todoist</h1>
                        <a className="getStartedBtn">Get started</a>
                    </div>
                    <img src={homeimg1} className="img1" />
                    <div className="screenshots">
                        <img src={homeimg2} className="img2" />
                        <img src={homeimg3} className="img3" />
                    </div>
                </section>
                <section className="section2">
                    <h2 className="header">Free up your mental space</h2>
                    <p>Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are or what device you use).</p>
                    <div className="links">
                        <a href="www.react.com">Browse Todoist's features</a>
                        <a href="www.react.com">See todoist in action</a>
                    </div>
                </section>
            </div>
        )
    }
}
