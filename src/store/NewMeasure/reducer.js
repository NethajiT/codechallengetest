const initialState = {
  id:'',
  text:'',
  datas:''
};

const measures = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MEASURE':
    //console.log(action);
   return Object.assign({}, state, {
        id: action.id,
          text: action.text,
           datas: [
                {
                    Datasets: 'Dataset 1',
                    Durations: 'Jan 2014'
                },
                {
                    Datasets: 'Dataset 2',
                    Durations: 'Jan 2014'
                },
                {
                    Datasets: 'Dataset 3',
                    Durations: 'Jan 2014'
                },
                {
                    Datasets: 'Dataset 4',
                    Durations: 'Jan 2014'
                },
                {
                    Datasets: 'Dataset 5',
                    Durations: 'Jan 2014'
                }
            ]
      });
      // return [
      //   ...state,
      //   {
      //     id: action.id,
      //     text: action.text,
      //      datas: [
      //           {
      //               Datasets: 'Dataset 1 Vishal',
      //               Durations: 'Jan 2014'
      //           },
      //           {
      //               Datasets: 'Dataset 2',
      //               Durations: 'Jan 2014'
      //           },
      //           {
      //               Datasets: 'Dataset 3',
      //               Durations: 'Jan 2014'
      //           },
      //           {
      //               Datasets: 'Dataset 4',
      //               Durations: 'Jan 2014'
      //           },
      //           {
      //               Datasets: 'Dataset 5',
      //               Durations: 'Jan 2014'
      //           }
      //       ]
      //   }
      // ]
    
    default:
      return state
      

  }
}

export default measures
