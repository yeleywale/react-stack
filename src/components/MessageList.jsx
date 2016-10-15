import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import {Card, List} from 'material-ui';
import firebase from 'firebase';
import _ from 'lodash';
import config from '../../FirebaseConfig';

// var config = {
//     apiKey: "AIzaSyBwKOTell3_gT-Sqr_-_H6k6ihzVTKHPFw",
//     databaseURL: "https://react-stack-85153.firebaseio.com/"
// };

firebase.initializeApp(config);

var database = firebase.database();

class MessageList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        };

        firebase.database().ref('messages').once('value', (snapshot) => {
            var messagesVal = snapshot.val();
            var messages = _(messagesVal).keys().map((messageKey) => {
                var cloned = _.clone(messagesVal[messageKey]);
                cloned.key = messageKey;
                return cloned;
            }).value();
            
            this.setState({messages: messages});
        });
    }

    render() {
        var messageNodes = this.state.messages.map((message) => {
            return (<Message key={message.date} message={message.message}/>);
        });

        return (
            <Card style={{
                flexGrow: 2,
                marginLeft: '31px'
            }}>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );
    }
}

export default MessageList;
