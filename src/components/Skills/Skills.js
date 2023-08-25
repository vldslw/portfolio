import './Skills.css';
import { SkillsCard } from '../SkillsCard/SkillsCard';
import { skillsData } from '../../utils/data/skillsData';

export const Skills = () => {
	return (
		<section className="skills">
			{skillsData.map((card) => (
				<SkillsCard key={card.id} title={card.title} text={card.text} />
			))}
		</section>
	);
};
