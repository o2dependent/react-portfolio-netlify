import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.projectArr = [
			{
				name: 'proj1',
				img: '',
				text: 'This is the base text for a project',
			},
		];
	}
	render() {
		return (
			<div className='Projects'>
				<div className='BG'>
					<div className='mobile'></div>
					<div className='left'></div>
					<div className='flex'></div>
					<div className='right'></div>
					<div className='rainbow'></div>
				</div>
				<div className='Projects-container'>
					<h1>Projects</h1>
					<p>
						My workflow primarily consists designing with Figma and
						implementing my designs with React and Node. Check out
						my projects below and let me know if you like it.
					</p>
				</div>
				<div className='Projects-card-container'>
					{this.projectArr.map((proj) => (
						<div className='project-card' key={proj.name}></div>
					))}
				</div>
			</div>
		);
	}
}

export default Projects;
