let addId=0;
export const createMeasure=(text)=>({
    type:'CREATE_MEASURE',
    id: addId ++,
    text
})