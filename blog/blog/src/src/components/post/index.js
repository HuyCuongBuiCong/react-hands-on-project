import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useListStyles, useGridStyles} from './style';

export default function Post(props) {
	const {viewMode, title} = props;
	const classes = viewMode === 'list' ? useListStyles() : useGridStyles();

	return (
		<Card className={classes.root}>
			<div className={classes.cardMedia}>
				<CardMedia
					className={classes.media}
					image="javascript.jpeg"
					title={title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.
					</Typography>
				</CardContent>
			</div>
			<CardActions>
				<Button size="small" color="primary">
                    Share
				</Button>
				<Button size="small" color="primary">
                    Learn More
				</Button>
			</CardActions>
		</Card>
	);
}