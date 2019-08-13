import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div >
            <div className="container">
                <div className="row">
                    
                        <img src ={require ("../images/pcrlogo.jpeg")} class ="logo1" />
                            <ul className="linkss">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Home">
                                    <span className={this.props.name === 'Home' ? 'active' : null}>Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">
                                    <span className={this.props.name === 'About' ? 'active' : null}>About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Myskills">
                                    <span className={this.props.name === 'Myskills' ? 'active' : null}>Myskills</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Myprofile">
                                    <span className={this.props.name === 'Myprofile' ? 'active' : null}>Myprofile</span>
                                </Link>
                            </li>
                           
                          

                         
                        </ul>
                    </div>


                </div>


            </div>
            



        );
    }
}

export default Header;