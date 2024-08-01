import React from 'react';
// import { useState } from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hello: '',
      dataFromServer: ''
    };
    this.input = ''
  }

  async setHello() {
    try {
      const res = await fetch('http://localhost:5001/api/hello');
      const res_data = await res.json();
      console.log('res_data from getData: ', res_data);
      let newState = { ...this.state };
      newState.hello = res_data.message;
      this.setState(newState);
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.setHello()
  }

  setInput(e) {
    e.preventDefault()
    this.input = e.target.value;
  }

  async postInput(e) {
    e.preventDefault()
    console.log(this.input);
    let data = { message: this.input, };
    try {
      const res = await fetch('http://localhost:5001/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error('Network response was not ok ' + res.statusText);
      }
      const res_data = await res.json();
      console.log('res_data from postData: ', res_data);
      let newState = { ...this.state };
      newState.dataFromServer = res_data.message;
      this.setState(newState);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.hello}</h2>
        <h3>Post to server:</h3>
        <form>
          <input type="text" onChange={(e) => this.setInput(e)} />
          <input type='submit' onClick={(e) => this.postInput(e)} value='Submit' />
        </form>
        {this.state.dataFromServer ? <h4>I received your POST request. This is what you sent me: {this.state.dataFromServer}</h4> : ''}
      </div>
    )
  }
}

export default App;
