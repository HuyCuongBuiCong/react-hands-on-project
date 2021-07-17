import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    background: '#f4f4f4',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    width: '450px',
    border: `solid 2px ${theme.palette.primary.main}`,
    borderRadius: '15px',
    padding: '10px',
    height: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formField: {
    margin: '5px',
  },
}));

export default useStyle;
