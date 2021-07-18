import {makeStyles} from '@material-ui/core';

const useStyle = makeStyles( (theme) => ({
	root:{
		padding: '5px',
		backgroundColor: theme.palette.primary.main,
		color: '#fff',
	},

	title : {
		flexGrow: '1'
	},
	link : {
		color: '#fff',
	},
	toolbar:{
		padding: 0
	},
	categories: {
		display : 'flex'
	},
	category : {
		margin: '0px 15px'
	},
	logo: {},
	logoSection :{
		display: 'flex',
		alignItems: 'center',
		marginTop: '15px',
		[theme.breakpoints.down('xs')]:{
			justifyContent: 'center'
		}
	}
}));

export default useStyle;
