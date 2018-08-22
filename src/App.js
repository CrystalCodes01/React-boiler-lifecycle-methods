import React, { Component } from 'react';
import Child from './child';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Crystal'
    };
    console.log('constructor');
  }

  componentWillMount() {
    if(window.innerWidth < 500){
      this.setState({ innerWidth:window.innerWidth });
    }
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    // AJAX calls here
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldcomponentUpdate(nextProps, nextState) {
    console.log('shouldcomponentUpdate');
    return true;
    //default is true, chnage to false to see demo of false
    // can stop child rerendering
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
    // do not use setState here
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('componentDidUpdate');
  }

  changeState(){
    this.setState({ name: 'Jacob' });
  }

  unmountChild(){
    this.setState({ name: 'Invisible Man' });
  }

  render() {
    console.log('render');
    if(this.state.name === 'Invisible Man'){
      return (<div><h1>Wow, Invisible Man stole our component again.</h1></div>);
    }
    return (
      <div className="App">
        <div>Name: {this.state.name}</div>
        <div>InnerWidth:{this.state.innerWidth}</div>
        <Child name={this.state.name}/>
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
      </div>
    );
  }
}

export default App;
