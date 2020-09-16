import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import MCTherapeutix from './Therapeutix.png';
import BlackJack from './BlackJack.png';
import FigMood from './FigMood.png';
import ExpressBlog from './ExpressBlog.png';
import { Link } from 'react-router-dom';
import BG from './BG';
import './Projects.css';

const ColorButton = withStyles((theme) => ({
	root: {
		cursor: 'pointer',
		transition: 'all 500ms',
		boxShadow: 'inset 1px 2px #0000001F',
		color: 'var(--light)',
		backgroundColor: 'var(--dark-accent)',
		opacity: '90%',
		width: '150px',
		margin: '0',
		'&.toContact': {
			width: '400px',
			marginBottom: '2.5vh',
			marginTop: '2.5vh',
			opacity: '100%',
			boxShadow: '1px 0px 10px var(--dark)',
		},
		'&.linkTo': {
			borderRadius: '0px 15px 0px 0px',
		},
		'&.github': {
			borderRadius: '15px 0px 0px 0px',
		},
		'&.Mui-disabled': {
			cursor: 'not-allowed',
			opacity: '35%',
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
		'@media (max-width: 900px)': {
			'&.toContact': {
				width: '80%',
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
				name: 'FigMood',
				img: FigMood,
				text:
					'This is a mood tracking PWA that is still in beta with the UI designed for mobile. This project was built using React, MongoDB, and Express.',
				toProj: 'https://figmood.netlify.app/',
				toGithub: 'https://github.com/o2dependent/mood-log',
			},
			{
				name: 'MCTherapeutix',
				img: MCTherapeutix,
				text:
					'This was a paid project for a massage therapist. Built in HTML/CSS and vanilla Javascript.',
				toProj: 'https://www.mctherapeutix.com/',
				toGithub: '',
			},
			{
				name: 'BlackJack',
				img: BlackJack,
				text:
					'This is a personal project using a card API to create a BlackJack game in React.',
				toProj: '',
				toGithub: 'https://github.com/o2dependent/BlackJack',
			},

			{
				name: 'Express Blog',
				img: ExpressBlog,
				text:
					'This is a blog template that I set up using Express, MongoDB, and EJS.',
				toProj: '',
				toGithub: 'https://github.com/o2dependent/blog-template',
			},
		];
	}
	render() {
		return (
			<div className='Projects'>
				<BG />
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
									disabled={proj.toProj === ''}
								>
									Check it out
								</ColorButton>
								<ColorButton
									className='github'
									href={proj.toGithub}
									target='_blank'
									disabled={proj.toGithub === ''}
								>
									Github
								</ColorButton>
							</div>
						</div>
					))}
				</div>
				<Link
					className='toContact'
					onClick={this.props.navLoading}
					to='/contact'
				>
					<ColorButton className='toContact'>Contact Me</ColorButton>
				</Link>
			</div>
		);
	}
}

export default Projects;
