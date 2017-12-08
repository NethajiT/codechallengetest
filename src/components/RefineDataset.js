import React from 'react'
import { Paper, Grid, Cell } from 'react-md';
//import Dropdown from 'react-dropdown'


const RefineDataset = ({dropdowns}) => {
    return (
        <div>
            <Paper>
                Merge
                 <Grid className="grid-example">
                    <Cell size={8} tabletSize={8} >
                        {dropdowns}
                       
                    </Cell>
                    <Cell size={4} tabletSize={6}>4 (6 tablet)</Cell>

                </Grid>
            </Paper>
        </div>
    )
}

export default RefineDataset;
