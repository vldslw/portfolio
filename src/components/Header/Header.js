import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
	return (
		<header className="header">
			<Link
				to="/"
				onClick={() => {
					window.location.href = '/';
				}}
				className="header__logo"
			>
				vldslw
			</Link>
			<nav className="header__nav">
				<a href="#stack" className="header__nav-link">
					About
				</a>
				<a href="#projects" className="header__nav-link">
					Work
				</a>
				<a href="#footer" className="header__nav-link">
					Contact
				</a>
			</nav>
		</header>
	);
};
