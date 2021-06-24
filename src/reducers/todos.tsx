const initialState:any = [
    {id: 1, desc: 'todo 1', completed: false},
    {id: 2, desc: 'todo 2', completed: false},
    {id: 3, desc: 'todo 3', completed: false},
]

const COMPLETE = 'COMPLETE'
const SUBMIT = 'SUBMIT'

export const complete = (id:any) => ({
    type: COMPLETE,
    payload: id,
})

export const submit = (text:any) => ({
    type: SUBMIT,
    payload: {
        id: Math.random().toString(36),
        desc: text,
        completed: false,
    },
})

export default (state = initialState, action: any) =>{
  switch(action.type){

    case COMPLETE:
        return state.map((x:any) => x.id === action.payload ? ({ ...x, completed: !x.completed }): x)
    
    case SUBMIT: {
      console.log(state)
      return [action.payload].concat(state)
    }
          
    default:
        return state
  }
}