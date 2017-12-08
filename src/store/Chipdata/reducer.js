const initialState = {
    chipdata: []
};

const Chips = (state = initialState, action) => {
  
    switch (action.type) {
        case 'CREATE_CHIP':
            state.chipdata.push(action.text)
            return Object.assign({}, state, {
                chipdata: state.chipdata             
            });

        case 'REMOVE_CHIP':        
            var newChipdata = state.chipdata
            var index = newChipdata.indexOf(action.text)
            newChipdata.splice(index, 1)
            return Object.assign({}, state, {
            chipdata: newChipdata
            });

        default:
            return state
    }
}

export default Chips
