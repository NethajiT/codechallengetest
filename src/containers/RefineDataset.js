import React, { Component } from 'react'
import { Paper, Grid, Cell } from 'react-md';
import RefineDataset from "../components/RefineDataset"

class Refine extends Component {
    constructor() {
        super();

        this.state =
            {

                dataset: ["aaaaaaaaaa", "s", "sd"]
            }

    }
    render() {
        // const chips = this.state.chipdata.map((c, i) => {
        // 				return (
        // 					<Chip label={c}  value={c} onClick={e => this.chipclick(c, { i })} />
        // 				)
        // 			})
        const dropdowns = () => {
            return (

                <Paper>
                    <select>
                        {this.state.dataset.map((Data, i) => (
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
            <RefineDataset dropdowns={dropdowns} />
        )
    }
}

export default Refine