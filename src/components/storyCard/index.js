import React from 'react';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// Define a custom styled component 'Item' for Paper elements
const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(1),
	boxShadow: 'none',
}));

// StoryCard component receives 'stories' as a prop
const StoryCard = (props) => {
	// Destructure the 'stories' prop
	const { stories } = props;

	return (
		<Grid
			container
			rowSpacing={1}
			columnSpacing={{ xs: 1, sm: 2, md: 3 }}
			justifyContent="center"
		>
			{stories.length === 0 ? ( // Check if 'stories' array is empty
				<Typography variant="h6">No stories are available</Typography> // Display a message when no stories are available
			) : (
				stories.map(
					(
						story,
						index // Map through the 'stories' array when stories are available
					) => (
						<Item item xs={12} key={index}>
							<Card sx={{ maxWidth: 300 }}>
								<CardMedia
									sx={{ height: 140 }}
									image={story?.multimedia[0].url} // Display the story image
									title={story?.title}
								/>
								<CardContent>
									{/* Display the story title */}
									<Typography gutterBottom variant="h5" component="div">
										{story?.title}
									</Typography>
									{/* Display the story abstract */}
									<Typography variant="body2" color="text.secondary">
										{story?.abstract}
									</Typography>
								</CardContent>
								<CardActions>
									{/* Display a link to read more about the story */}
									<a
										href={story?.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										Learn More
									</a>
								</CardActions>
							</Card>
						</Item>
					)
				)
			)}
		</Grid>
	);
};

export default StoryCard;
