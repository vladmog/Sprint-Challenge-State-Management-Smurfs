import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: "",
        age: "",
        height: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitSmurf = (e) => {
        e.preventDefault()
        let smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.props.postSmurf(smurf)
        this.setState({
            name: "",
            age: "",
            height: "",
        })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <form onSubmit = {this.submitSmurf}>
                    <input
                        name = "name"
                        value = {this.state.name}
                        onChange = {this.handleChange}
                        placeholder = "name"
                    />
                    <input
                        name = "age"
                        value = {this.state.age}
                        onChange = {this.handleChange}
                        placeholder = "age"
                    />
                    <input
                        name = "height"
                        value = {this.state.height}
                        onChange = {this.handleChange}
                        placeholder = "height"
                    />
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;