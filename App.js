import React, { Component } from 'react';
class App extends Component{
   constructor()
   {
      super();
      this.state={
         showcomponent:true,
         data: 0
      };

      this.setNewNumber = this.setNewNumber.bind(this)
      this.triggerunmount=this.triggerunmount.bind(this);
   }

   triggerunmount(){
      this.setState({showcomponent:false});
   }
   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }
   render(){
          return(<div>
           {/* The below div component will be hidden when it is clicked */}  
             {this.state.showcomponent?
            <div onClick={this.triggerunmount} >
            <p>Click Here to hide the div</p>
        </div>:null
             }
             <button onClick = {this.setNewNumber}>INCREMENT</button>
         <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }


}
class Content extends React.Component {
   componentWillMount() {
      console.log('Child Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Child Component DID MOUNT!')
   }
   // below 3 functions are triggered whenever the props is changed
   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default App;