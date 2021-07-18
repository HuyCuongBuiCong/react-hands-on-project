import React, {useState} from 'react';
import useStyle from './style';
import TopBar from './TopBar';
import GridView from './GridView';
import ListView from './ListView';


const PostList = function () {
	const classes = useStyle();
	const [viewMode, setViewMode] = useState('list');
	return(
		<div className={classes.root}>
			<TopBar viewMode={viewMode} setViewMode={setViewMode}/>
			{viewMode === 'grid' ? <GridView /> : <ListView/>}
		</div>  
	);
};

export default  PostList;