import React, { Component } from 'react';
import './Contact.css';

class ContactSuccess extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='Contact'>
				<div className='BG'>
					<div className='mobile'></div>
					<div className='left'></div>
					<div className='flex'></div>
					<div className='right'></div>
					<div className='rainbow'></div>
				</div>
				<div className='Contact-container'>
					<h1>Thank you for reaching out!</h1>
					<p>I will get back you as soon as I can.</p>
				</div>
			</div>
		);
	}
}

export default ContactSuccess;
