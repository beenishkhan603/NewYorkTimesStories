import React, { useEffect, useState } from 'react';
import axios from 'axios';

import StoryCard from './components/storyCard';

function App() {
	const [stories, setStories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/top-stories`)
			.then((response) => {
				setStories(response.data.results);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	return (
		<div style={{ justifyContent: 'center', textAlign: 'center' }}>
			<h1>New York Times Top Stories</h1>
			<StoryCard stories={stories} />
		</div>
	);
}

export default App;
