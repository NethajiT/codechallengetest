import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { FontIcon } from 'react-md';
import '../App.css';
class App extends Component {
  create(){
   window.location="/Enterdetails";
  }
  render() {
    return (
      
      <div id="App">
        <fieldset id="View">
          <FontIcon>home</FontIcon>
          <h4>Create New Measure</h4>
          <div id="Data">
            
          <p id="Heads">&#10112; Measure Details</p><br/>
          <div id="Datas">
            <i class="material-icons" id="Tag">local_offer</i>
          <input type="text" placeholder="Enter Measure Name"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="material-icons" id="Edit">rate_review</i>
          <input type="text" id="Description" placeholder="Enter Description"/>
          <br/>
          <br/><br/>
          <i class="material-icons" id="Key">lock_open</i>
          <label id="Radio">
          <input type="radio" value="Public"/>Public
          <input type="radio" value="Private"/>Private
          <input type="radio" value="Readonly"/>Readonly
          </label>
          <br/><br/>
          <center>
          <button id="Create" onClick={this.create}>Create Measure</button>
          
          </center>
          </div>
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