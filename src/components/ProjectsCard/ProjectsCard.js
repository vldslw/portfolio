import './ProjectsCard.css';
import gitHubIcon from './icons/github.svg'; 

export const ProjectsCard = ({ title, text, imgUrl, projectLink, gitHubLink }) => {
	return (
		<article className="projects-card">
			<a
				href={projectLink}
				className="projects-card__link"
				target="_blank"
				rel="noreferrer"
			>
				<img className="projects-card__image" src={imgUrl} alt={title} />
			</a>
			<div className="projects-card__desc">
				<h2 className="projects-card__title">{title}</h2>
				<div className="projects-card__desc-lower">
					<p className="projects-card__text">{text}</p>
					<a
						href={gitHubLink}
						className="projects-card__git-link"
						target="_blank"
						rel="noreferrer"
					>
						<img className="projects-card__git-image" src={gitHubIcon} alt='GitHub link' />
					</a>
				</div>
			</div>
		</article>
	);
};
