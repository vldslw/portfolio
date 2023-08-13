import './Projects.css';
import { ProjectsCard } from '../ProjectsCard/ProjectsCard';
import moviesExplorer from './images/moviesExplorer.png';
import mesto from './images/mesto.png';
import learnToLearn from './images/learnToLearn.png';
import russianTravel from './images/russianTravel.png';

export const Projects = () => {
	return (
		<section className="projects">
			<h2 className="projects__title">Latest projects</h2>
			<div className="projects__cards">
				<ProjectsCard
					title={'Movies Explorer'}
					text={'HTML, CSS, JavaScript, React, Nginx, Express.js, Node.js'}
					imgUrl={moviesExplorer}
					projectLink={'https://movies-explorer-frontend.onrender.com'}
				/>
				<ProjectsCard
					title={'Mesto'}
					text={'HTML, CSS, JavaScript, React, Nginx, Express.js, Node.js'}
					imgUrl={mesto}
					projectLink={'https://react-mesto-2a57.onrender.com'}
				/>
				<ProjectsCard
					title={'Traveling around Russia'}
					text={'HTML, CSS, Flexbox, Grid, BEM methodology'}
					imgUrl={russianTravel}
					projectLink={'https://vldslw.github.io/russian-travel'}
				/>
				<ProjectsCard
					title={'Learning How to Learn'}
					text={'HTML, CSS, Flexbox, BEM methodology'}
					imgUrl={learnToLearn}
					projectLink={'https://vldslw.github.io/how-to-learn'}
				/>
			</div>
		</section>
	);
};
