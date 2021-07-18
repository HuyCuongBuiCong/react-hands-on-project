import React from 'react';
import {
} from '@material-ui/core';
import { ViewComfy , List } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

const Topbar = ({
	viewMode,
	setViewMode
}) => {
	return (
		<div >
			<IconButton
				color={viewMode === 'grid' ? 'secondary' : 'default'}
				onClick={() => setViewMode('grid')}
			>
				<ViewComfy/>
			</IconButton>

			<IconButton
				color={viewMode === 'list' ? 'secondary' : 'default'}
				onClick={() => setViewMode('list')}
			>
				<List/>
			</IconButton>
		</div>
	);
};

export default Topbar;
