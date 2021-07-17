import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import UserForm from './components/user-form';
import theme from './theme/theme';

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <UserForm />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
