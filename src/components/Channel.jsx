import React from 'react';
import mui from 'material-ui';
import {ListItem} from 'material-ui';

class Channel extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
       return(
           <ListItem>
              {this.props.channel}
           </ListItem>
       );
    }
}

export default Channel;
