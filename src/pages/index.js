import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import {
	renderMestoActivate,
	renderMoviesActivate,
} from '../utils/api/renderActivate';
import { useEffect } from 'react';

export const Routing = () => {
	useEffect(() => {
		renderMoviesActivate();
		renderMestoActivate();
	}, []);

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};
