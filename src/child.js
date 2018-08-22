import React, { Component } from 'react';

class Child extends Component {
  constructor(){
    super();
    console.log('child constructor');
  }

  componentWillMount() {
    console.log('child componentWillMount');
  }

  componentDidMount() {
    console.log('child componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps');
  }

  shouldcomponentUpdate(nextProps, nextState) {
    console.log('child shouldcomponentUpdate');
    return true;
    //default is true, chnage to false to see demo of false
    // can stop child rerendering
  }

  componentWillUpdate() {
    console.log('child componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('child prevProps', prevProps);
    console.log('child prevState', prevState);
    console.log('child componentDidUpdate');
  }

  render() {
    console.log('child render');
    return (
      <div className="App">
        <div>Child name: {this.props.name}</div>
      </div>
    );
  }
}

export default Child;
