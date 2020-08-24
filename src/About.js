import React, { Component } from 'react';
import './About.css';
import BG from './BG';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='About'>
				<BG />
				<div className='text-container'>
					<h1>About me</h1>
					<p>
						I am a self motivated web developer and designer from
						the Pacific Northwest. I have been fully dedicated to
						learning web development technologies for the past year,
						and my interest has not decline at all. As someone with
						a passively busy mind, I find the endless possibilities
						in programming drive me towards a brighter future.
					</p>
				</div>
			</div>
		);
	}
}

export default About;
