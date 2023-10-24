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

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(1),
	boxShadow: 'none',
}));
const StoryCard = (props) => {
	const { stories } = props;
	if (stories.length === 0) {
		return <Typography variant="h6">No stories available</Typography>;
	}
	return (
		<Grid
			container
			rowSpacing={1}
			columnSpacing={{ xs: 1, sm: 2, md: 3 }}
			justifyContent="center"
		>
			{stories.map((story, index) => (
				<Item item xs={12}>
					<Card sx={{ maxWidth: 300 }} key={index}>
						<CardMedia
							sx={{ height: 140 }}
							image={story?.multimedia[0].url}
							title={story?.title}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{story?.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{story?.abstract}
							</Typography>
						</CardContent>
						<CardActions>
							<a href={story?.url} target="_blank" rel="noopener noreferrer">
								Learn More
							</a>
						</CardActions>
					</Card>
				</Item>
			))}
		</Grid>
	);
};
export default StoryCard;
