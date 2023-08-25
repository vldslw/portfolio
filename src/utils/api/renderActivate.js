export const renderMoviesActivate = () => {
	return fetch('https://movies-explorer-api-ni81.onrender.com/signin/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: 'qwertyqwerty@email.com',
			password: 'qwerty',
		}),
	})
		.then((res) => {
			if (res.status >= 400) {
				throw new Error();
			}
		})
		.catch(() => console.log('MoviesExplorer backend activated'));
};

export const renderMestoActivate = () => {
	return fetch('https://react-mesto-api-nt4r.onrender.com/signin/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: 'qwertyqwerty@email.com',
			password: 'qwerty',
		}),
	})
		.then((res) => {
			if (res.status >= 400) {
				throw new Error();
			}
		})
		.catch(() => console.log('Mesto backend activated'));
};
