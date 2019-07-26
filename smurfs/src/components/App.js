import React, { Component } from "react";
import "./App.css";
import Form from './Form';
import Smurfs from './Smurfs';
import { connect } from 'react-redux';
import { getData, postData } from '../actions/actions';


class App extends Component {

  componentDidMount(){
    this.props.getData()
  }

  postSmurf = (smurf) => {
    this.props.postData(smurf)
  }

  render() {
    return (
      <div className="App">
        <Form postSmurf = {this.postSmurf}/>
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

export default connect(mapStateToProps, {getData, postData})(App);
