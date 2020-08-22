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

	navItemClick = (newHash) => {
		const { navLoading } = this.props;
		navLoading();
		this.onClose();
	};

	render() {
		return (
			<nav className='Navbar'>
				<p className='Brand'>Olsen</p>
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
						{['About', 'Projects', 'Contact'].map((name) => (
							<ListItem key={name}>
								<Link
									key={name}
									onClick={() =>
										this.navItemClick(
											`/${
												name === 'About'
													? ''
													: name.toLowerCase()
											}`
										)
									}
									to={`/${
										name === 'About'
											? ''
											: name.toLowerCase()
									}`}
								>
									<div className='nav-slider-container'>
										<div className='nav-slider'></div>
										<div className='nav-slider'></div>
									</div>
									{name}
								</Link>
							</ListItem>
						))}
					</List>
					{/* <List className='Nav-bottom'>
						<Divider />
						<ListItem>ethan@eolsen.dev</ListItem>
					</List> */}
				</SwipeableDrawer>
			</nav>
		);
	}
}

export default Navbar;
