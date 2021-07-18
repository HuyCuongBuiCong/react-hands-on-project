import React from 'react';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './style';

export default function Footer() {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Typography align="center">
                    Copyright © Your Website {new Date().getFullYear()}.
			</Typography>
		</footer>
	);
}
