import React, { Component } from 'react'
import '../Enterdetails.css'
import { connect } from 'react-redux'
import { Paper } from 'react-md'
import { TabsContainer, Tabs, Tab } from 'react-md';

const App = ({ input, rendermeasures, renderPageNumbers, chips }) => {
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
                        <Tabs id="tabs">
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
                            <Tab label="Refine Dataset">Pending</Tab>
                            <Tab label="Add Computation">Pending </Tab>
                            <Tab label="Output Attributes">Pending </Tab>
                            <Tab label="Summary">Pending </Tab>
                        </Tabs>
                    </TabsContainer>
                    {/*<div className="topnav">
                        <a className="active" href="/Select Dataset">&#10112; &nbsp;Select Dataset</a>
                        <a href="/RefineDataset"><span className="Numberdefault">&#10113;</span>&nbsp;Refine Dataset</a>
                        <a href="/AddComputation"><span className="Numberdefault">&#10114;</span>&nbsp;Add Computation</a>
                        <a href="/OutputAttributes"><span className="Numberdefault">&#10115;</span>&nbsp;Output Attributes</a>
                        <a href="/Summary"><span className="Numberdefault">&#10116;</span>&nbsp;Summary</a>
                    </div>*/}

                </div>
                <button>Cancel</button>
            </Paper>

        </div>
    )

}




export default App