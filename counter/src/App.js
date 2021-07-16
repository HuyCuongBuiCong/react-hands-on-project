import  {MuiThemeProvider} from '@material-ui/core/styles'
import Counter from "./components/counter";
import theme from "./theme/theme";

function App() {
  return (
     <MuiThemeProvider theme={theme}>
      <Counter/>
     </MuiThemeProvider>
  );
}

export default App;
