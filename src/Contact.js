import React, { Component } from 'react';
import './Contact.css';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const ColorButton = withStyles((theme) => ({
	root: {
		transition: 'all 500ms',
		borderRadius: '15px',
		boxShadow: 'inset 1px 2px #0000001F',
		color: 'var(--light)',
		backgroundColor: 'var(--dark-accent)',
		opacity: '90%',
		gridArea: '3 / 1 / 3 / 3',
		width: '50%',
		margin: '0 auto',
		marginTop: '1rem',
		'&:hover': {
			opacity: '100%',
			backgroundColor: 'var(--dark-accent)',
		},
		'@media (max-width: 350px)': {
			'& .MuiButton-label': {
				fontSize: '14px',
			},
		},
	},
}))(Button);

const ContactTextField = withStyles({
	root: {
		'&input:-internal-autofill-selected,input:-webkit-autofill,input:-webkit-autofill:hover, input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus': {
			border: 'none',
			backgroundColor: 'blue',
			WebkitTextFillColor: 'var(--light)',
			WebkitBoxShadow: 'none',
			transition: 'background-color 5000s ease-in-out 0s',
		},
		'&.message': {
			gridArea: '2 / 1 / 3 / 3',
		},
		'& label': {
			color: 'var(--light-50)',
		},
		'& label.Mui-focused': {
			color: 'var(--light)',
		},
		'& .MuiInputBase-input': {
			color: 'var(--light)',
			fontWeight: '300',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'var(--light)',
		},
		'& .MuiInput-underline:before': {
			borderColor: 'var(--light-50)',
		},
		'& .MuiInput-underline:hover:before': {
			borderColor: 'var(--light)',
		},
		'@media (max-width: 350px)': {
			'& .MuiInputBase-input': {
				fontSize: '14px',
			},
		},
	},
})(TextField);

class Contact extends Component {
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
					<h1>Contact</h1>
					<p>
						Contact me through email or social media if you are
						interested in working together or just to say hi.
					</p>
					<form
						className='Contact-form'
						name='contact'
						netlify
						method='POST'
						action=''
					>
						<ContactTextField
							label='Name'
							className='name'
							id='name'
							name='name'
						/>
						<ContactTextField
							label='Email'
							id='email'
							name='email'
						/>
						<ContactTextField
							multiline={true}
							label='Message'
							className='message'
							id='message'
							name='message'
						/>
						<ColorButton type='submit' size='medium'>
							Send Away!
						</ColorButton>
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
