import React from 'react';

class App extends React.Component {
    constructor(){
       super();
       this.state = {
          messages: [
             "hallo there how are you?",
             "Hi I am fine, and you?"
          ]
       };
    }

    render(){
       debugger;
       var messageNodes = this.state.messages.map((message) => {
          return (
             <div style={{color: 'red'}}>{message}</div>
          );
       });

       return (
       // render should always return only one element
          <div>{messageNodes}</div>
       );
    }


    // We need to inst that components and add it to the dom

}
export default App;
