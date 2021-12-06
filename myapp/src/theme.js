import {createTheme} from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff8f0',
            contrastText: '#000000'
        },
        secondary: {
            main: '#ffe099',
            contrastText: '#000000'
        },
    },
    button: {
        backgroundColor: '#ffe099',
        color:  '#ffe099',
        '&:hover': {
            backgroundColor: '#ffe099',
            color: '#ffe099',
        },
      },  
  });
  
  
export default theme