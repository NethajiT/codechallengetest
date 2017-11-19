import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <fieldset id="View">
          <h4>Create New Measure</h4>
          <div id="Data">
            <fieldset >
          <p id="Head">Measure Details</p><br/>
          <input type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="Description"/>
          <br/>
          <br/><br/>
          <label id="Radio">
          <input type="radio" value="Public"/>Public
          <input type="radio" value="Private"/>Private
          <input type="radio" value="Readonly"/>Readonly
          </label>
          <br/><br/>
          <center>
          <button id="Create">Create Measure</button>
          </center>
          </fieldset>
          </div>
          <div id="button">
          <button>Save</button>&nbsp;&nbsp;
          <button>Close</button>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default App;
