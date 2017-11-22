import React, { Component } from 'react';
import { NavigationDrawer, Paper,Button, FontIcon,IconSeparator,TextField,SelectionControlGroup } from 'react-md';
import '../App.css';


class App extends Component {
    
    create(){
   window.location="/Enterdetails";
  }
  render() {
    return (      
    
    <div>
     <fieldset id="Main">
       <span id="New">Create New Measure </span>
       <fieldset>
         <div id="Titles"> &#10112; Measure Details</div>
         <fieldset>
      <IconSeparator iconBefore>
      <TextField
      id="floating-center-title"
      lineDirection="center"
      leftIcon={<FontIcon>local_offer</FontIcon>}
      placeholder="Enter Measure Name"
      className="md-cell md-cell--bottom"
    />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    
    <TextField
      id="floating-multiline"
      leftIcon={<FontIcon>rate_review</FontIcon>}
     lineDirection="center"
      rows={2}
      placeholder="Enter Description"
      className="md-cell md-cell--bottom"
    />
   
  </IconSeparator>
 <br/><br/><br/>
     <div id="Key">
       <i class="material-icons" id="Key">lock_open</i>
    <SelectionControlGroup  
    id="selection-control-group-radios"
    type="radio"
    
    controls={[{
      label: 'Public',
      value: 'A',
    }, {
      label: 'Private',
      value: 'B',
    }, {
      label: 'Readonly',
      value: 'C',
    }]}
  />

  </div>
  <br/> <br/><br/><br/>
   <Button raised  onClick={this.create}>Create Measure</Button>
    <br/><br/><br/>
  </fieldset>
  </fieldset>
   <br/><br/>
  <Button raised>Cancel</Button>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Button raised>Save</Button>
   <br/><br/><br/>
      </fieldset>

    </div>
   );
  }
}

export default App;
