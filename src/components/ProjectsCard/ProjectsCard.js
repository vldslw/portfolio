import './ProjectsCard.css';

export const ProjectsCard = ({ title, text, imgUrl, projectLink }) => {
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
				<p className="projects-card__text">{text}</p>
			</div>
		</article>
	);
};
