import React, { Component } from 'react'
import { Paper, Grid, Cell } from 'react-md';
import RefineDataset from "../components/RefineDataset"
import { connect } from 'react-redux'
import Select from "../containers/Selectpage"

class Refine extends Component {
    constructor() {
        super();

        this.state =
            {

                dataset: []
            }

    }

    componentWillMount() {
        this.setState({ dataset: this.props.chipdatas })
    }
    render() {

        const dropdowns = () => {
            return (

                <Paper>
                    <select>
                        {this.props.chipdatas.map((Data, i) => (
                            <option value={Data}>{Data}</option>))}
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <select>
                        {this.state.dataset.map((Data, i) => (
                            <option value={Data}>{Data}</option>))}
                    </select>
                    
                </Paper>
            )
        }
        return (
            <div>
                <Select dropdowns={dropdowns} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        measures: state.measures,
        chipdatas: state.chips.chipdata
    }

}

const Refinedataset = connect(
    mapStateToProps
)(Refine)

export default Refinedataset