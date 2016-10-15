import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';
import {Card, List} from 'material-ui';


//var {Card, List} = mui;

class ChannelList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           channels: [
              'Lagos',
              'Ibadan',
           ],
        };
    }

    render(){
      var channelNodes = this.state.channels.map((channel) => {
         return (
            <Channel key={channel} channel={channel} />
         );
      });

      return (
        <Card style={{
          flexGrow: 1,
        }}>
          <List>
            {channelNodes}
          </List>
        </Card>
      );


    }
}

export default ChannelList;
