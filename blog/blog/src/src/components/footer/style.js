import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.primary.main,
		marginTop: theme.spacing(4),
		padding: theme.spacing(6, 0),
		color:'#fff',
		position: 'relative',
		bottom: '0px',
		width: '100%',
	},
}));