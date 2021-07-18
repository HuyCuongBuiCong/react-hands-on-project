import Grid from '@material-ui/core/Grid';
import Post from '../post';
import React from 'react';
import useStyle from './style';

const PostList = function () {
	const classes = useStyle();
	return(
		<div className={classes.root}>
			<Grid container spacing={ 2 }>
				<Grid item sm={ 6 } md={ 3 }>
					<Post/>
				</Grid>
				<Grid item sm={ 6 } md={ 3 }>
					<Post/>
				</Grid>
				<Grid item sm={ 6 } md={ 3 }>
					<Post/>
				</Grid>
				<Grid item sm={ 6 } md={ 3 }>
					<Post/>
				</Grid>
				<Grid item sm={ 6 } md={ 3 }>
					<Post/>
				</Grid>
				<Grid item sm={ 6 } md={ 3 }>
					<Post/>
				</Grid>
				<Grid item sm={ 6 } md={ 3 }>
					<Post/>
				</Grid>
				<Grid item sm={ 6 } md={ 3 }>
					<Post/>
				</Grid>
			</Grid>
		</div>  
	);
};

export default  PostList;