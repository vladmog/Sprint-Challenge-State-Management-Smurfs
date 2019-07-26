import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getData } from '../actions/actions';


class App extends Component {

  componentDidMount(){
    this.props.getData()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getData})(App);
