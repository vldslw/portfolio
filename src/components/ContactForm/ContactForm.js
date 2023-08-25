import './ContactForm.css';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { submitContact } from '../../utils/api/contact';
import { useFormValidation } from '../../utils/hooks/useFormValidation';

export const ContactForm = () => {
	const { values, handleChange, errors, isValid, resetForm } =
		useFormValidation();
	const [isNameTouched, setIsNameTouched] = useState(false);
	const [isEmailTouched, setIsEmailTouched] = useState(false);
	const [isMessageTouched, setIsMessageTouched] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		submitContact({
			name: values.name,
			email: values.email,
			message: values.message,
		});
		resetForm();
	}

	return (
		<form className="contact-form" onSubmit={handleSubmit} name="contact-form">
			<span className="contact-form__span-error">
				{isNameTouched && errors.name !== '' && errors.name}
			</span>
			<input
				type="text"
				id="name"
				name="name"
				value={values.name}
				onChange={handleChange}
				onBlur={() => setIsNameTouched(true)}
				className={`contact-form__input ${
					isNameTouched && errors.name !== '' && 'contact-form__input_error'
				}`}
				placeholder="Name"
				required
			/>
			<span className="contact-form__span-error">
				{isEmailTouched && errors.email !== '' && errors.email}
			</span>
			<input
				type="email"
				id="email"
				name="email"
				value={values.email}
				onChange={handleChange}
				onBlur={() => setIsEmailTouched(true)}
				className={`contact-form__input ${
					isEmailTouched && errors.email !== '' && 'contact-form__input_error'
				}`}
				placeholder="Email"
				required
			/>
			<span className="contact-form__span-error">
				{isMessageTouched && errors.message !== '' && errors.message}
			</span>
			<textarea
				id="message"
				name="message"
				rows={10}
				value={values.message}
				onChange={handleChange}
				onBlur={() => setIsMessageTouched(true)}
				className={`contact-form__message ${
					isMessageTouched &&
					errors.message !== '' &&
					'contact-form__message_error'
				}`}
				placeholder="Type your message here"
				required
			/>
			<Button text={`Submit`} isDisabled={!isValid} modifier={'footer'} />
		</form>
	);
};
