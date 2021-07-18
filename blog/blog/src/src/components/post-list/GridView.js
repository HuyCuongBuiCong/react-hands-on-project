import listData from './listData';
import Grid from '@material-ui/core/Grid';
import Post from '../post';
import React from 'react';

const  GridView = () => {
	return (
		<Grid container spacing={ 2 }>
			{listData.map( (p, index) => (
				<Grid key={index} item sm={ 6 } md={ 3 }>
					<Post viewMode='grid' title={p.title}/>
				</Grid>) )}

		</Grid>
	);
};

export default GridView;