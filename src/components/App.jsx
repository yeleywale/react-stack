import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import RaisedButton from 'material-ui/RaisedButton';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';

import {blue500, blue700, pink400} from 'material-ui/styles/colors';

const styles = {
    container: {
        // margin: '30px auto 30px'
    }
};

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: blue500,
        accent1Color: pink400
    },
    appBar: {
      height: 50,
    },
});

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    handleRequestClose = () => {
        this.setState({open: false});
    }

    handleTouchTap = () => {
        this.setState({open: true});
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }
    getChildContext() {
        return {muiTheme: getMuiTheme(darkBaseTheme)};
    }

    render() {
        //const standardActions = (<FlatButton label="Ok" primary={true} onTouchTap={this.handleRequestClose}/>);

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <AppBar iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    <div style={{
                      display: 'flex',
                      flexflow: 'row wrap',
                      maxWidth: 1200,
                      width: '100%',
                      margin: '30px auto 30px'
                    }}>
                        <MessageList />
                        <ChannelList />
                    </div>
                    <MessageBox />
                </div>
            </MuiThemeProvider>
        );
    }
}
export default App;
