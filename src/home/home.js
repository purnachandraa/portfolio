import React, { Component } from 'react';
import Header from '../components/header';
import './home.css';
import ReactTypingEffect from 'react-typing-effect';
class Home extends Component {
	render() {
		return (
			<div className="pcr">
				<div className="pcr1">
					<Header name="Home" />

					<div className="container declare" >
						<div className="row">
							<div className="vertical">
								<h2 className = "love">I Love To Design</h2>
								<h1 className="headline">
									
									<span className="cd-words-wrapper" >
									<span class = "i">  I AM</span>	
										<ReactTypingEffect
											text={["PurnaChandra Rao", "A Web Developer","A Designer"]}
											eraseDelay={400} 
											
											className='typing'//text=["Hello.", "World!"]
										/>
									</span>
								</h1>
							</div>
						</div>
						<footer>
							
							
							
						</footer>
					</div>



				</div>

			</div>
		);
	}
}

export default Home;