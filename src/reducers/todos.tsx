const initialState:any = [
    {id: 1, desc: 'todo 1', completed: false},
    {id: 2, desc: 'todo 2', completed: false},
    {id: 3, desc: 'todo 3', completed: false},
]

const COMPLETE = 'COMPLETE'

export const complete = (id:any) => ({
    type: COMPLETE,
    payload: id,
})
export default (state = initialState, action: any) =>{
    console.log(action)
    return state
}