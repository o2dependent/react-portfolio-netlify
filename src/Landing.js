import React, { Component } from 'react';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import './Landing.css';
import './Landing-mobile.css';

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
			h1LettersArr: Array(this.h1Text.length).fill(false),
			pShow: false,
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

	componentDidMount = () => {
		let i = 0;
		let timer = setInterval(() => {
			console.log(i + ' : ' + this.state.h1LettersArr.length);
			this.setState((st) => ({
				h1LettersArr: [
					...st.h1LettersArr.slice(0, i),
					true,
					...st.h1LettersArr.slice(i + 1, this.h1Text.length),
				],
			}));
			if (i === this.h1Text.length - 1) {
				clearInterval(timer);
				setTimeout(() => this.setState({ pShow: true }), 1000);
			} else {
				i++;
			}
		}, 80);
	};

	render() {
		const { classes } = this.props;
		return (
			<div className='Landing'>
				<Navbar />
				<div className='LandingBG'>
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
						my blog articles about React and CSS animations to learn
						more about how I work.
					</p>
				</div>
			</div>
		);
	}
}

export default withStyles(style)(Landing);
