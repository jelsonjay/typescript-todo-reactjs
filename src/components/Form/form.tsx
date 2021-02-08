import React, {useState, useEffect} from 'react'

type FormE = React.FormEvent<HTMLFormElement>

interface TodoItem{
  id: number
  value: string
  isComplete: boolean
}

const TodoList: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<TodoItem[]>([])
 

// get Items to LocalStorage

// set Items to LocalStorage
useEffect(() => {
  localStorage.setItem('itemStore', JSON.stringify(todos))
},[todos])


const handleSubmit = (e: FormE): void => {
  e.preventDefault()
  addTodo(value)
  setValue('')
}

  const addTodo = (value: string): void => {
    const newTodos:  TodoItem[] = [...todos, {value:value, isComplete: false, id:0}]
    setTodos(newTodos)
  }

const completeTodo = (index: number): void => {
 const newTodos: TodoItem[] = [...todos]
 newTodos[index].isComplete = !newTodos[index].isComplete
 setTodos(newTodos)
}

  const deleteTodo = (index: number): void => {
  const newTodos: TodoItem[] = [...todos]
  newTodos.splice(index, 1)
  setTodos(newTodos)
}

const newTodosComplete = () =>{
  return todos.filter(todo => todo.isComplete === false)
 }

  return (
 <>

<div>
  <h1 data-testid='h1'>Todo App</h1>
  <form className='todo__form' 
  onSubmit={handleSubmit}
  data-testid='new-todo-form'
  >
  <input className='todo__input' type='text' 
  value={value} placeholder='Enter a todo item'
  data-testid='todo-search'
 onChange={e => setValue(e.target.value)}/>
  <button data-testid='todo-button' type='submit'>Add Todo</button>

  </form>
  
  {todos.length === 0 ? <h2 data-testid='todo-text'>Add Todo!</h2>

  :

  <section>
    <span>You have {newTodosComplete().length} item</span>
    {todos.map((item: TodoItem, index: number) =>(
    <div key={index}>
    <div style={{textDecoration: item.isComplete ? 'line-through' : '', 
    fontStyle:'italic'}}>{item.value} </div>
 
    <button type='button' onClick={() => completeTodo(index)} >
    {item.isComplete ? 'Incoplete' : 'Complete'}
    </button>
  
    <button  data-testid='todo-delete' className='delete' type='button' onClick={() => deleteTodo(index)}>Delete</button>
    
    </div>
    ))}
  
  </section>
}
</div>


 </>
  );
}

export default TodoList;