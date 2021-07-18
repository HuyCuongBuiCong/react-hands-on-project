import React from 'react';
import { Toolbar} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import {Menu} from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import SideBar from '../sidebar';
import useStyle from './style';

const Header = () => {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<Container maxwitdh='md'>
				<div className={classes.logoSection}>
					<img className={classes.logo} src='logo-ctd.png' width='60px' height='auto'/>
					<Typography variant='h6'>
						CTD
					</Typography>
				</div>
				<Toolbar className={classes.toolbar}>
					<Hidden smUp>
						<SideBar>
							<IconButton edge='start'>
								<Menu color='secondary'/>
							</IconButton>
						</SideBar>
					</Hidden>

					<Hidden xsDown>
						<div className={classes.categories} >
							<Typography variant='h6' className={classes.category}>
								<Link  className={classes.link}>
								Java
								</Link>
							</Typography>
							<Typography variant='h6' className={classes.category}>
								<Link  className={classes.link}>
								Javascript
								</Link>
							</Typography>
							<Typography variant='h6' className={classes.category}>
								<Link className={classes.link}>
								Microservices
								</Link>
							</Typography>
						</div>
					</Hidden>

				</Toolbar>
			</Container>
		</div>

	);
};

export default  Header;