import './ContactForm.css';
import { useState } from 'react';
import { Button } from '../Button/Button';

export const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleEmailChange(e) {
		setEmail(e.target.value);
	}

	function handleMessageChange(e) {
		setMessage(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form className="contact-form" onSubmit={handleSubmit} name="contact-form">
			<input
				type="text"
				value={name ?? ''}
				onChange={handleNameChange}
				id="name"
				name="name"
				className="contact-form__input"
				placeholder="Name"
				required
			/>
			<input
				type="text"
				value={email ?? ''}
				onChange={handleEmailChange}
				id="email"
				name="email"
				className="contact-form__input"
				placeholder="Email"
				required
			/>
			<textarea
				type="message"
				rows={10}
				value={message ?? ''}
				onChange={handleMessageChange}
				id="message"
				name="message"
				className="contact-form__message"
				placeholder="Type your message here"
				required
			/>
			<Button text={`Submit`} />
		</form>
	);
};
