import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f25130',
    },
    secondary: {
      main: '#198558',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fffffa',
    },
  },
});

export default theme;