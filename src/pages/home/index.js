import './index.css';
import { Header } from '../../components/Header/Header';
import { Cover } from '../../components/Cover/Cover';
import { Stack } from '../../components/Stack/Stack';
import { Skills } from '../../components/Skills/Skills';
import { Projects } from '../../components/Projects/Projects';
import { Footer } from '../../components/Footer/Footer';

export const HomePage = () => {
	return (
		<div className="page">
			<Header />
			<main class="content">
				<Cover />
				<Stack />
				<Skills />
				<Projects />
			</main>
			<Footer />
		</div>
	);
};
