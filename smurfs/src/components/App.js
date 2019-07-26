import React, { Component } from "react";
import "./App.css";
import Form from './Form';
import Smurfs from './Smurfs';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';


class App extends Component {

  componentDidMount(){
    this.props.getData()
  }

  render() {
    return (
      <div className="App">
        <Form />
        <Smurfs smurfs = {this.props.smurfs}/>
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
