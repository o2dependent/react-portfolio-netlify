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

	navItemClick = () => {
		const { navLoading } = this.props;
		navLoading();
		this.onClose();
	};

	render() {
		return (
			<nav className='Navbar'>
				<Link to='/' onClick={this.navItemClick} className='Brand'>
					Olsen
				</Link>
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
						<ListItem className='header'>
							<div className='title-slider-container'>
								<div className='title-e'>
									<div className='title-slider'></div>
									<div className='title-slider'></div>
									<div className='title-slider'></div>
									<div className='title-slider'></div>
									<div className='title-slider'></div>
								</div>
								<div className='title-o'>
									<div className='title-slider'></div>
									<div className='title-slider'></div>
									<div className='title-slider'></div>
									<div className='title-slider'></div>
								</div>
							</div>
							<h1>Ethan Olsen</h1>
						</ListItem>
					</List>
					<Divider />
					<List className='nav-item-list'>
						{['About', 'Projects', 'Contact'].map((name) => (
							<ListItem className='nav-item' key={name}>
								<Link
									key={name}
									onClick={() => this.navItemClick()}
									to={`/${name.toLowerCase()}`}
								>
									<div className='nav-slider-container'>
										<div className='nav-slider'></div>
										<div className='nav-slider'></div>
										<div className='nav-slider'></div>
										<div className='nav-slider'></div>
									</div>
									{name}
								</Link>
							</ListItem>
						))}
					</List>
					<List className='footer'>
						<Divider />
						<ListItem className='footer-icons'>
							<a
								className='icon-link'
								href='https://www.linkedin.com/in/eolsendev/'
								rel='noopener noreferrer'
								target='_blank'
							>
								<i class='fab fa-linkedin'></i>
							</a>
							<a
								className='icon-link'
								href='https://github.com/o2dependent'
								rel='noopener noreferrer'
								target='_blank'
							>
								<i class='fab fa-github'></i>
							</a>
							<a
								className='icon-link'
								href='mailto: 131eolsen@gmail.com'
								rel='noopener noreferrer'
								target='_blank'
							>
								<i class='fas fa-envelope'></i>
							</a>
							{/* <a className='icon-link' href='#'>
								<i class='fab fa-discord'></i>
							</a> */}
						</ListItem>
					</List>
				</SwipeableDrawer>
			</nav>
		);
	}
}

export default Navbar;
