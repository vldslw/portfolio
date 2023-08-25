import './Button.css';

export const Button = ({ text, handleClick, modifier }) => {
	return (
		<button className={`button button_${modifier}`} onClick={handleClick}>
			{text}
		</button>
	);
};
