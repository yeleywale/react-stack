import React from 'react';
import mui from 'material-ui';
import {Card} from 'material-ui';
import TextField from 'material-ui/TextField';


class MessageBox extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
       return(
          <Card style={{
            maxWidth: 1200,
            margin: '30px auto 30px',
            padding: 30,
          }}>
            <TextField id="text-field-default" rows={6} multiLine={true} style={{
              width: '100%',
              border: '#D0D0D0',
              resize: 'none',
              borderRadius: 3,
              minHeight: 50,
              color: '#555',
              fontSize: 14,
              // outline: 'solid blue 1px'
            }} />
          </Card>
       );
    }
}

export default MessageBox;
