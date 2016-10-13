import React from 'react';
import MessageList from './MessageList.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import mui from 'material-ui';
import AppBar from 'material-ui/AppBar';

var ThemeManager = new mui/Styles.ThemeManager();
var Colors = mui/Styles/Colors;

class App extends React.Component {
    constructor(){
       super();
}

static childContextTypes = {
   muiTheme: React.PropTypes.object
}

getChildContext(){
  return {
    muiTheme: ThemeManager.getCurrentTheme()
  };
}

render(){
    return (
      <div>
         <AppBar title="BigField Awesome Chat App" />
         <MessageList />
      </div>
     );
    }
}
export default App;
