import React from 'react';
import mui from 'material-ui';
import {ListItem} from 'material-ui';
import Avatar from 'material-ui/Avatar';

class Message extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
       return(
           <ListItem
           leftAvatar={
             <Avatar
             src="https://lh3.googleusercontent.com/nB5CmNpsLSW8I3j3fNvDDWGJjwYOfpvn9W9pzlJ0E12MBNJjCecBd97IyCgJFT0nZfaj50Fqdg=w1366-h768-rw-no"
             />
           }
           >
              {this.props.message}
           </ListItem>

       );
    }
}

export default Message;
