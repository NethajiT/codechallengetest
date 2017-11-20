import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class App extends Component {
  create(){
   window.location="/Enterdetails";
  }
  render() {
    return (
      
      <div id="App">
        <fieldset id="View">
          <h4>Create New Measure</h4>
          <div id="Data">
            
          <p id="Head">&#10112; Measure Details</p><br/>
          <div id="Datas">
          <input type="text" placeholder="Enter Measure Name"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="Description" placeholder="Enter Description"/>
          <br/>
          <br/><br/>
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