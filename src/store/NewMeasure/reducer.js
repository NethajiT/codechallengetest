const todos = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_MEASURE':
    console.log(action);
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          
        }
      ]
    
    default:
      return state
      

  }
}

export default todos
