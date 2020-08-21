import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const cols = 2;

const style = {
	Loading: {
		display: (props) => (props.isDoneLoading ? 'none' : 'grid'),
		gridTemplateColumns: `repeat(${cols},1fr)`,
		gridTemplateRows: '1fr',
		gridColumnGap: '0px',
		zIndex: '1000',
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		position: 'absolute',
		top: 0,
		left: 0,
		transition: '1s',
	},
	box: {
		width: 'calc(100% + 1px)',
		transition: 'all 0.5s, opacity 1s',
		opacity: 1,
		transform: 'translate(0, 0)',
		backgroundColor: 'var(--dark)',
		zIndex: '10000',
		animation: '0.7s $slideToTop linear',
		'&:nth-of-type(2n)': {
			animation: '0.7s $slideToBottom linear',
			transform: 'translate(0, 0)',
			'&$done': {
				transform: 'translate(0,100vh)',
				animation: '0.7s $slideOutTop linear',
			},
		},
		'&$done': {
			opacity: 0,
			transform: 'translate(0,-100vh)',
			animation: '0.7s $slideOutBottom linear',
		},
	},
	done: {
		opacity: 0,
	},
	'@keyframes slideToTop': {
		'0%': {
			opacity: 0,
			transform: 'translate(0,100vh)',
		},
		'100%': {
			opacity: 1,
			transform: 'translate(0, 0)',
		},
	},
	'@keyframes slideToBottom': {
		'0%': {
			opacity: 0,
			transform: 'translate(0,-100vh)',
		},
		'100%': {
			opacity: 1,
			transform: 'translate(0, 0)',
		},
	},
	'@keyframes slideOutTop': {
		from: {
			transform: 'translate(0, 0)',
		},
		to: {
			transform: 'translate(0,100vh)',
		},
	},
	'@keyframes slideOutBottom': {
		from: {
			transform: 'translate(0, 0)',
		},
		to: {
			transform: 'translate(0,-100vh)',
		},
	},
};

class LoadingScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: Array(cols).fill(true),
		};
	}

	componentDidMount = () => {
		setTimeout(() => {
			// start animation out and setTimeout to set App state after animation
			this.setState({ boxes: Array(cols).fill(false) });
			setTimeout(() => {
				this.props.changeIsDoneLoading(true);
			}, 700);
		}, 2000);
	};

	render() {
		const { isLoading, classes } = this.props;
		return (
			<div
				className={`${classes.Loading} ${isLoading && classes.active}`}
			>
				{this.state.boxes.map((box, i) => (
					<div
						key={i}
						className={`${classes.box} ${box ? '' : classes.done}`}
					></div>
				))}
			</div>
		);
	}
}

export default withStyles(style)(LoadingScreen);
