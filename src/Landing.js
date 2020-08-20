import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import './Landing.css';

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
						my blog articles about React and CSS animations to learn
						more about how I work.
					</p>
				</div>
			</div>
		);
	}
}

export default withStyles(style)(Landing);
