import './Footer.css';
import gitHubIcon from './icons/github.svg';
import linkedInIcon from './icons/linkedin.svg';
import telegramIcon from './icons/telegram.svg';
import instagramIcon from './icons/instagram.svg';
import { ContactForm } from '../ContactForm/ContactForm';

export const Footer = () => {
	function downloadCurriculum(e) {
		e.preventDefault();
		window.open('https://github.com/vldslw');
	}

	return (
		<footer className="footer">
			<div className="footer__desc">
				<h2 className="footer__header">Let’s work together</h2>
				<p className="footer__text">
					Now that you know about me, let me know if you are interested in
					working with me!
				</p>
				<button className="footer__cv-button" onClick={downloadCurriculum}>
					Download CV
				</button>
				<ul className="footer__links">
					<li className="footer__link">
						<a
							href="https://github.com/vldslw"
							className="footer__link-url"
							target="_blank"
							rel="noreferrer"
						>
							<img src={gitHubIcon} className="footer__link-img" alt="GitHub" />
						</a>
					</li>
					<li className="footer__link">
						<a
							href="https://www.linkedin.com/in/vldslw/"
							className="footer__link-url"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={linkedInIcon}
								className="footer__link-img"
								alt="LinkedIn"
							/>
						</a>
					</li>
					<li className="footer__link">
						<a
							href="https://t.me/vldslw"
							className="footer__link-url"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={telegramIcon}
								className="footer__link-img"
								alt="Telegram"
							/>
						</a>
					</li>
					<li className="footer__link">
						<a
							href="https://www.instagram.com/pavlov.vld"
							className="footer__link-url"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={instagramIcon}
								className="footer__link-img"
								alt="Instagram"
							/>
						</a>
					</li>
				</ul>
			</div>
			<ContactForm />
		</footer>
	);
};
