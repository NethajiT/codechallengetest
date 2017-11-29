import React, { Component } from 'react'
import '../Enterdetails.css'
import { connect } from 'react-redux'

const App = ({ input, rendermeasures, renderPageNumbers }) => {
    return (
        
        <div>
            <fieldset id="View">

                <p id="Title">Enter details for
                     <span>
                       &nbsp;&nbsp; {input}
                    </span>

                </p>
                <div id="EDcontent">
                    <div className="topnav">
                        <a className="active" href="/Select Dataset">&#10112; &nbsp;Select Dataset</a>
                        <a href="/RefineDataset"><span className="Numberdefault">&#10113;</span>&nbsp;Refine Dataset</a>
                        <a href="/AddComputation"><span className="Numberdefault">&#10114;</span>&nbsp;Add Computation</a>
                        <a href="/OutputAttributes"><span className="Numberdefault">&#10115;</span>&nbsp;Output Attributes</a>
                        <a href="/Summary"><span className="Numberdefault">&#10116;</span>&nbsp;Summary</a>
                    </div>
                    <p id="Head">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Existing Datasets
               </p>
                    <fieldset id="Output">
                        <div >
                            {rendermeasures}
                            {renderPageNumbers}
                        </div>
                    </fieldset>
                </div>
                <button>Cancel</button>
            </fieldset>

        </div>
    )

}




export default App