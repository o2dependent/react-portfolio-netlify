import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import './Landing.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ColorButton = withStyles((theme) => ({
	root: {
		transition: 'all 600ms 500ms',
		borderRadius: '15px',
		boxShadow: 'inset 1px 2px #0000001F',
		color: 'var(--light)',
		backgroundColor: 'var(--dark-accent)',
		opacity: (props) => (props.show ? '100%' : '0%'),
		gridArea: '3 / 1 / 3 / 3',
		width: '50vw',
		maxWidth: '400px',
		margin: '0 auto',
		marginTop: '1rem',
		'&:hover': {
			backgroundColor: 'var(--dark-accent)',
		},
		'@media (max-width: 350px)': {
			'& .MuiButton-label': {
				fontSize: '14px',
			},
		},
	},
}))(Button);

const style = {
	opacityNone: {
		opacity: 0,
	},
	h1Letter: {
		transition: 'opacity 1.5s',
		opacity: 1,
	},
	pShow: {
		transition: 'opacity 2s ease-out',
		opacity: 1,
	},
};

class Landing extends Component {
	constructor(props) {
		super(props);
		this.h1Text = 'Hello, I am Ethan Olsen.';
		this.state = {
			h1LettersArr: Array(this.h1Text.length).fill(
				!this.props.firstEnter
			),
			pShow: !this.props.firstEnter,
		};
	}

	formatH1 = () => {
		const text = this.h1Text,
			textArr = text.split('');
		return textArr.map((letter, i) => (
			<span
				className={
					this.state.h1LettersArr[i]
						? this.props.classes.h1Letter
						: this.props.classes.opacityNone
				}
				key={`${letter}${i}`}
			>
				{letter}
			</span>
		));
	};

	textAnimation = () => {
		let i = 0;
		let timer = setInterval(() => {
			this.setState((st) => ({
				h1LettersArr: [
					...st.h1LettersArr.slice(0, i),
					true,
					...st.h1LettersArr.slice(i + 1, this.h1Text.length),
				],
			}));
			if (i === this.h1Text.length - 1) {
				clearInterval(timer);
				setTimeout(() => this.setState({ pShow: true }), 400);
			} else {
				i++;
			}
		}, 50);
	};

	componentDidMount = () => {
		this.props.changeIsLoading(false);
		if (this.props.firstEnter) {
			setTimeout(() => {
				this.textAnimation();
				this.props.changeFirstEnter();
			}, 2000);
		}
	};

	render() {
		const { isDoneLoading, classes } = this.props;
		isDoneLoading && this.textAnimation();
		return (
			<div className='Landing'>
				<div className='BG'>
					<div className='mobile'></div>
					<div className='left'></div>
					<div className='flex'></div>
					<div className='right'></div>
					<div className='rainbow'></div>
				</div>
				<div className='Landing-text-container'>
					<h1>{this.formatH1()}</h1>
					<p
						className={
							this.state.pShow
								? classes.pShow
								: classes.opacityNone
						}
					>
						I am a full-stack web developer and designer. Check out
						some of my projects and visit my GitHub if you are
						interested in my work.
					</p>
					<Link onClick={this.props.navLoading} to='/projects'>
						<ColorButton show={this.state.pShow}>
							Projects
						</ColorButton>
					</Link>
				</div>
			</div>
		);
	}
}

export default withStyles(style)(Landing);
