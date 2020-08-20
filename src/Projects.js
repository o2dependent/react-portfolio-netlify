import React, { Component } from 'react';
import './Projects.css';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import MCTherapeutix from './Therapeutix.png';
import BlackJack from './BlackJack.png';
import TextAdventure from './TextAdventure.PNG';

const ColorButton = withStyles((theme) => ({
	root: {
		transition: 'all 500ms',
		boxShadow: 'inset 1px 2px #0000001F',
		color: 'var(--light)',
		backgroundColor: 'var(--dark-accent)',
		opacity: '90%',
		width: '150px',
		margin: '0',
		marginTop: '1rem',
		'&.linkTo': {
			borderRadius: '0px 15px 15px 0px',
		},
		'&.github': {
			borderRadius: '15px 0px 0px 15px',
		},
		'&.Mui-disabled': {
			backgroundColor: 'grey',
			color: 'var(--light-50)',
		},
		'&:hover': {
			opacity: '100%',
			backgroundColor: 'var(--dark-accent)',
		},
		'@media (max-width: 350px)': {
			'& .MuiButton-label': {
				fontSize: '14px',
			},
		},
	},
}))(Button);

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.projectArr = [
			{
				name: 'MCTherapeutix',
				img: MCTherapeutix,
				text:
					'This was a paid project for a massage therapist. This was built using only HTML/CSS and Javascript.',
				toProj: 'https://www.mctherapeutix.com/',
				toGithub: '',
			},
			{
				name: 'BlackJack',
				img: BlackJack,
				text:
					'This is a personal project using a card API to create a BlackJack game in React.',
				toProj: '',
				toGithub: '',
			},
			{
				name: 'Text Adventure',
				img: TextAdventure,
				text:
					'This is a personal project built to mimic old school terminal games. Built in HTML/CSS and Javascript.',
				toProj: '',
				toGithub: '',
			},
			{
				name: 'Express Blog',
				img: '',
				text:
					'This is a blog template that I set up for a co-worker using Express, MongoDB, and EJS.',
				toProj: '',
				toGithub: '',
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
						<div className='project-card' key={proj.name}>
							<img src={proj.img} alt={proj.name} />
							<div className='overlay' />
							<h2>{proj.name}</h2>
							<p>{proj.text}</p>
							<div className='project-buttons'>
								<ColorButton
									className='linkTo'
									href={proj.toProj}
									target='_blank'
								>
									Check it out
								</ColorButton>
								<ColorButton
									className='github'
									disabled={proj.toGithub === ''}
								>
									Github
								</ColorButton>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Projects;
