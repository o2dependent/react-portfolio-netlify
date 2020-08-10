import React, { Component } from 'react';
import { SwipeableDrawer, List, ListItem, Divider } from '@material-ui/core';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	onOpen = () => {
		this.setState({ open: true });
	};

	onClose = () => {
		this.setState({ open: false });
	};

	render() {
		return (
			<nav className='Navbar'>
				<a className='Brand' href='#'>
					Olsen
				</a>
				<div onClick={this.onOpen} className='Hamburger'>
					<div className='line'></div>
					<div className='line'></div>
					<div className='line'></div>
				</div>
				<SwipeableDrawer
					anchor={'right'}
					open={this.state.open}
					onClose={this.onClose}
					onOpen={this.onOpen}
					transitionDuration={(100, 400)}
				>
					<List>
						<ListItem>
							<h1>Ethan Olsen</h1>
						</ListItem>
					</List>
					<Divider />
					<List>
						<ListItem>
							<Link to='/'>About</Link>
						</ListItem>
						<ListItem>
							<Link to='/projects'>Projects</Link>
						</ListItem>
						<ListItem>
							<Link to='/contact'>Contact</Link>
						</ListItem>
					</List>
				</SwipeableDrawer>
			</nav>
		);
	}
}

export default Navbar;
