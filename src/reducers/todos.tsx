const initialState:any = [
    {id: 1, desc: 'todo 1', completed: false},
    {id: 2, desc: 'todo 2', completed: false},
    {id: 3, desc: 'todo 3', completed: false},
]

const COMPLETE = 'COMPLETE'
const SUBMIT = 'SUBMIT'
const START_SUBMIT = 'START_SUBMIT'
const ERROR_SUBMIT = 'ERROR_SUBMIT'

export const complete = (id:any) => ({
    type: COMPLETE,
    payload: id,
})

export const submit = (todo:any) => ({
    type: SUBMIT,
    payload: todo,
})

export const startSubmit = () => ({
    type: START_SUBMIT,
})

export const errorSubmit = (error:string) => ({
    type: ERROR_SUBMIT,
    error
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

export const saveTodo = (text:string) => async (dispatch:any, getState:any) => {
  //const state = getState()
  dispatch(startSubmit())
  try {
    const todo = {
      desc: text,
      completed: false,
    }
    const response:any = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(todo)
    })
    const id = await response.json()
    dispatch(submit({ ...todo, ...id }))
  } catch(err){
    dispatch(errorSubmit(err))
  }
}