// external imports
import React, { useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import axios from 'axios';
// internal imports
import StoryCard from './components/storyCard';
// css
import './App.css';

function App() {
	const [stories, setStories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/top-stories`) // api calling to get the stories
			.then((response) => {
				setStories(response.data.results);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="App">
			<h1>New York Times Top Stories</h1>
			<br />
			{isLoading ? (
				<ThreeCircles
					height="70"
					width="70"
					color="#0039a6"
					wrapperStyle={{ justifyContent: 'center' }}
					visible={true}
					ariaLabel="three-circles-rotating"
				/>
			) : (
				<StoryCard stories={stories} />
			)}
		</div>
	);
}

export default App;
