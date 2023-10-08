import './Projects.css';
import { ProjectsCard } from '../ProjectsCard/ProjectsCard';
import moviesExplorer from './images/moviesExplorer.png';
import mesto from './images/mesto.png';
import learnToLearn from './images/learnToLearn.png';
import russianTravel from './images/russianTravel.png';
import tzeezotje from './images/tzeezotje.png';
import easyfit from './images/easyfit.png';
import gitHubLogo from './images/github.svg';

export const Projects = () => {
	return (
		<section id="projects" className="projects">
			<h2 className="projects__title">Some of my projects</h2>
			<div className="projects__cards">
				<ProjectsCard
					title={`EasyFit`}
					text={'React, TypeScript, Redux, Sass'}
					imgUrl={easyfit}
					projectLink={'https://easyfit.space/'}
					gitHubLink={'https://github.com/easyfit-organization/'}
				/>
				<ProjectsCard
					title={`Bistrot 't Zeezotje`}
					text={'HTML, CSS, JavaScript, React'}
					imgUrl={tzeezotje}
					projectLink={'https://tzeezotje.onrender.com/'}
					gitHubLink={'https://github.com/vldslw/tzeezotje'}
				/>
				<ProjectsCard
					title={'Movies Explorer'}
					text={'HTML, CSS, JavaScript, React, Nginx, Express.js, Node.js'}
					imgUrl={moviesExplorer}
					projectLink={'https://movies-explorer-frontend.onrender.com'}
					gitHubLink={'https://github.com/vldslw/movies-explorer-frontend'}
				/>
				<ProjectsCard
					title={'Mesto'}
					text={'HTML, CSS, JavaScript, React, Nginx, Express.js, Node.js'}
					imgUrl={mesto}
					projectLink={'https://react-mesto-2a57.onrender.com'}
					gitHubLink={'https://github.com/vldslw/react-mesto-api-full'}
				/>
				<ProjectsCard
					title={'Traveling around Russia'}
					text={'HTML, CSS, Flexbox, Grid, BEM methodology'}
					imgUrl={russianTravel}
					projectLink={'https://vldslw.github.io/russian-travel'}
					gitHubLink={'https://github.com/vldslw/russian-travel'}
				/>
				<ProjectsCard
					title={'Learning How to Learn'}
					text={'HTML, CSS, Flexbox, BEM methodology'}
					imgUrl={learnToLearn}
					projectLink={'https://vldslw.github.io/how-to-learn'}
					gitHubLink={'https://github.com/vldslw/how-to-learn'}
				/>
				<article className="projects-cards__portfolio">
						<a
							href='https://github.com/vldslw/portfolio'
							className="projects-cards__portfolio-link"
							target="_blank"
							rel="noreferrer"
						>
							<img className="projects-cards__portfolio-image" src={gitHubLogo} alt='GitHub logo' />
							<p className="projects-cards__portfolio-text">Link to this portfolio website repository →</p>
						</a>
				</article>
			</div>
		</section>
	);
};
