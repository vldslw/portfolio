import './Skills.css';
import { SkillsCard } from '../SkillsCard/SkillsCard';

export const Skills = () => {
	return (
		<section className="skills">
			<SkillsCard
				title={'Skillset'}
				text={
					'I’m working with JavaScript, React, Node,js, HTML and CSS. I have completed the Web Development career path at Practicum by Yandex. '
				}
			/>
			<SkillsCard
				title={'Ready for remote work'}
				text={
					'I am from Russia, but currently I live in Buenos Aires, Argentina. I’m open to remote work. My time zone is GMT-3.'
				}
			/>
			<SkillsCard
				title={'Constantly learning'}
				text={
					'I’m constantly learning something new. Right now I’m taking a course on Vue.js, studying TypeScript, deepening my knowledge of JS and React. '
				}
			/>
			<SkillsCard
				title={'Experience in the media'}
				text={
					'I have an extensive previous experience working in the news media, including as a foreign correspondent in Washington, DC covering the White House and the US government for almost five years. '
				}
			/>
		</section>
	);
};
