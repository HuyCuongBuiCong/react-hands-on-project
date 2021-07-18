import listData from './listData';
import Grid from '@material-ui/core/Grid';
import Post from '../post';
import React from 'react';

const  ListView = () => {
	return (
		<Grid container spacing={ 2 }>
			{listData.map( (p, index) => (
				<Grid key={index} item sm={ 12 }>
					<Post viewMode='list' title={p.title}/>
				</Grid>) )}

		</Grid>
	);
};

export default ListView;