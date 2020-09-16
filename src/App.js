import React, { Component } from 'react';
import './App.css';
import Landing from './Landing';
import { Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Navbar from './Navbar';
import Projects from './Projects';
import LoadingScreen from './LoadingScreen';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactSuccess from './ContactSuccess';
import { AnimatePresence } from 'framer-motion';
// import About from './About';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			isDoneLoading: true,
			firstEnter: true,
		};
	}

	changeIsLoading = (newVal) => {
		this.setState({ isLoading: newVal });
	};

	changeIsDoneLoading = (newVal) => {
		this.setState({ isDoneLoading: newVal });
	};

	navLoading = () => {
		this.setState({ isDoneLoading: false, isLoading: true });
	};

	changeFirstEnter = () => {
		this.setState({ firstEnter: false });
	};

	render() {
		return (
			<div className='App'>
				<Navbar navLoading={this.navLoading} />
				<div
					style={{
						position: 'absolute',
						height: '100vh',
						width: '100vw',
						overflow: 'hidden',
					}}
				>
					<AnimatePresence>
						{!this.state.isDoneLoading && (
							<LoadingScreen
								changeIsDoneLoading={this.changeIsDoneLoading}
							/>
						)}
					</AnimatePresence>
				</div>
				<Route
					render={({ location }) => (
						<TransitionGroup component={null}>
							<CSSTransition
								classNames='page'
								timeout={700}
								key={location.key}
							>
								<Switch location={location}>
									<Route
										exact
										path='/'
										render={(routeProps) => (
											<Landing
												navLoading={this.navLoading}
												firstEnter={
													this.state.firstEnter
												}
												changeFirstEnter={
													this.changeFirstEnter
												}
												isLoading={this.state.isLoading}
												changeIsLoading={
													this.changeIsLoading
												}
												{...routeProps}
											/>
										)}
									/>
									<Route
										exact
										path='/about'
										render={(routeProps) => (
											// <About
											// 	navLoading={this.navLoading}
											// 	changeLoading={
											// 		this.changeLoading
											// 	}
											// />
											// ######################
											// ### FOR THE COMMIT ###
											// ######################
											<Landing
												navLoading={this.navLoading}
												firstEnter={
													this.state.firstEnter
												}
												changeFirstEnter={
													this.changeFirstEnter
												}
												isLoading={this.state.isLoading}
												changeIsLoading={
													this.changeIsLoading
												}
												{...routeProps}
											/>
										)}
									/>
									<Route
										exact
										path='/projects'
										render={(routeProps) => (
											<Projects
												navLoading={this.navLoading}
												changeLoading={
													this.changeLoading
												}
											/>
										)}
									/>
									<Route
										exact
										path='/contact'
										render={(routeProps) => (
											<Contact
												changeLoading={
													this.changeLoading
												}
											/>
										)}
									/>
									<Route
										exact
										path='/contact/success'
										render={(routeProps) => (
											<ContactSuccess
												changeLoading={
													this.changeLoading
												}
											/>
										)}
									/>
									<Route
										path='*'
										render={(routeProps) => (
											<Landing
												navLoading={this.navLoading}
												firstEnter={
													this.state.firstEnter
												}
												changeFirstEnter={
													this.changeFirstEnter
												}
												isLoading={this.state.isLoading}
												changeIsLoading={
													this.changeIsLoading
												}
												{...routeProps}
											/>
										)}
									/>
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					)}
				/>
			</div>
		);
	}
}

export default App;
