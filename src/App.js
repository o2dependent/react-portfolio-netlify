import React, { Component } from 'react';
import './App.css';
import Landing from './Landing';
import { Route, Switch, Redirect } from 'react-router-dom';
import Contact from './Contact';
import Navbar from './Navbar';
import Projects from './Projects';
import LoadingScreen from './LoadingScreen';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactSuccess from './ContactSuccess';

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
				{!this.state.isDoneLoading && (
					<LoadingScreen
						isLoading={this.state.isLoading}
						isDoneLoading={this.state.isDoneLoading}
						changeIsDoneLoading={this.changeIsDoneLoading}
					/>
				)}
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
