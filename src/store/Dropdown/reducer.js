const initialState = {
    dropdownValue:'',
    fields:[]
};

const Dropdown = (state = initialState, action) => {
  
    switch (action.type) {
        case 'DROPDOWN_VALUE':       
            return Object.assign({}, state, {
                dropdownValue:action.value ,
                // fields:[
                   
                //     {data:"field 1"},
                //     {data:"field 2"},
                //     {data:"field 2"},
                //     {data:"field 2"},
                //     {data:"field 2"}
                //     ]    

                fields:["field 1","field 2","field 3","field 4","field 5","field 6"]                                
            });

        default:
            return state
    }
}

export default Dropdown
