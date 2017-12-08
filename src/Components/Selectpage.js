import React from 'react'
import '../Enterdetails.css'
//import { connect } from 'react-redux'
import { Paper } from 'react-md'
import { TabsContainer, Tabs, Tab,Grid,Cell } from 'react-md';

const App = ({ input, rendermeasures, renderPageNumbers, chips, refine,dropdowns,field,dropdownval }) => {
    return (

        <div>
            <Paper>

                <p id="Title">Enter details for
                     <span>
                        &nbsp;&nbsp; {input}
                    </span>

                </p>
                <div id="EDcontent">
                    <TabsContainer colored>
                        <Tabs id="tabs" tabId="simple-tab">
                            <Tab label="Select Dataset"><div>
                                <p id="Head"> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Existing Datasets
                   </p>
                                <Paper id="Output">
                                    <div >
                                        {rendermeasures}
                                        {renderPageNumbers}                                   
                                        <fieldset>
                                            <div>Selected Datasets<span>
                                                {chips}</span>
                                            </div>
                                        </fieldset>                                      
                                    </div>
                                </Paper>
                            </div></Tab>
                            <Tab label="Refine Dataset" >
                                <div>
                                    <Paper>
                                        Merge
                                        <Grid className="grid-example">
                                            <Cell size={8} tabletSize={8} >
                                                
                                                {dropdowns}  
                                               
                                               
                                                                                       
                                            </Cell>
                                            <Cell size={4} tabletSize={6}>{dropdownval}</Cell>
                                        </Grid>
                                    </Paper>
                                </div>
                            </Tab>
                            <Tab label="Add Computation">Pending </Tab>
                            <Tab label="Output Attributes">Pending </Tab>
                            <Tab label="Summary">Pending </Tab>
                        </Tabs>
                    </TabsContainer>
                </div>
                <button>Cancel</button>
            </Paper>
        </div>
    )

}

export default App