import {makeStyles} from '@material-ui/core/styles';

const useGridStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	}
});

const useListStyles = makeStyles( (theme) => ({
	root: {
		width: '100%',
	},
	media: {
		width: '200px',
		height: 'auto',
		[theme.breakpoints.down('sm')] : {
			display: 'none'
		}
	},
	cardMedia : {
		display : 'flex',
		width: '100%'
	}
}));


export {
	useGridStyles,
	useListStyles
};