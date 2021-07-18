import React from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import theme from './src/theme/theme';
import HomePage from './src/pages/home';


function App() {
	return (
		<MuiThemeProvider theme={theme} >
			<HomePage/>
		</MuiThemeProvider>
	);
}

export default App;
