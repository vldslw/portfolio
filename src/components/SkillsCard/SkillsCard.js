import './SkillsCard.css';

export const SkillsCard = ({ title, text, color }) => {
	return (
		<article className="skills-card">
			<div className="skills-card__image"></div>
			<div className="skills-card__desc">
				<h2 className="skills-card__title">{title}</h2>
				<p className="skills-card__text">{text}</p>
			</div>
		</article>
	);
};
