import React, { Component } from 'react';
import './about.css';
import Header from '../components/header';
import HoverCard from 'react-png-hovercard';

class About extends Component {
    render() {
        return (
            <div className = "abo">
                <Header name="About" />
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 abtimg">
                            <HoverCard class="img1"
                                front={
                                    <div className="Front">
                                        <img className="Front"
                                            src={require("../images/purna.jpeg")}
                                            alt=""
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                }
                                back={
                                    <div className="Back">
                                        <img 
                                            src={require("../images/pc.jpeg")}
                                            alt=""
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                }
                                maxWidth={450}
                                animationSpeed={1000}
                                height={500}
                                margin={10}

                            />


                        </div>
                        <div class="col-md-6 ">
                            <h1 class="abt">I Am UI  Designer</h1>
                            <p class="aboutt">
                                I am Purnachandra Rao B. My passion for programming
                                is in my ability to make tools that make people's lives easier.
                                I love creating value for people, and thrive when I can see the
                                benefit derived from my work as quickly as possible.
                                I believe good work encourages specific behavior, but doesn't necessarily
                                 enforce it. My programming style is to make the smallest change necessary to achieve my goal,
                                 keep only the most successful work flows and refactor/delete code as part of each change.
                         </p>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default About;