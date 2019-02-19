import React, { Component } from 'react'

export default class AddHunter extends Component {
    state = {
        name: '',
        age: '',
        sword: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addHunter(this.state);
        this.setState({
            name: '',
            age: '',
            sword: ''
        })
    }

    render() {
        const { name, age, sword } = this.state;
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" onChange={this.handleChange} value={name}/>
                <br />
                <label htmlFor="age">Age</label>
                <input id='age' type="text" onChange={this.handleChange} value={age} />
                <br />
                <label htmlFor="sword">Sword</label>
                <input id='sword' type="text" onChange={this.handleChange} value={sword} />
                <br />
                <button>Submit</button>
            </form>
        </div>
        )
    }
}
