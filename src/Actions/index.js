let addId=0;
export const addTodo=(text)=>({
    type:'ADD_TASK',
    id: addId ++,
    text
})