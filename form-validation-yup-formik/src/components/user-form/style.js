import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: '#f4f4f4',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    border: `solid 2px ${theme.palette.primary.main}`,
    borderRadius: '15px',
    padding: '10px',
    height: '50%',
    [theme.breakpoints.down('sm')]: {
      height: '60%',
      width: '90%',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '90%',
  },
  header: {
    fontSize: '50px',
  },
  formField: {
    margin: '10px 0px',
    [theme.breakpoints.down('sm')]: {
      margin: '5px 0px',
    },
  },
}));

export default useStyle;
