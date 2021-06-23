const initialState = [
    {id: 1, desc: 'todo 1', completed: false},
    {id: 2, desc: 'todo 2', completed: false},
    {id: 3, desc: 'todo 3', completed: false},
]
export default (state = initialState, action: any) =>{
    console.log(action)
    return state
}