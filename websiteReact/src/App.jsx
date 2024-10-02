import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'

import { useEffect, useState } from 'react';

const App = () => {
  

  const [todos,setTodos]=useState([])
  const[todoValue,setTodoValue]=useState('');

  const persistData=(newList)=>{
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  const handleAddTodos=(newTodo)=>{
   const newList=[...todos,newTodo]
   persistData(newList)
   setTodos(newList)
  }
   const deleteTodo=(index)=>{
const newList=todos.filter((todo,todoIndex)=>{
  return todoIndex !==index
})
persistData(newList)
 setTodos(newList)
  }

  const editTodo=(index)=>{
    const EditedList=todos[index]
    setTodoValue(EditedList)
    deleteTodo(index)
  }
 useEffect(()=>{

let localTodos=localStorage.getItem('todos');
if(!localTodos){
  return
}
localTodos=JSON.parse(localTodos).todos
setTodos(localTodos)
  },[])

  return (
    <>
      <TodoInput  todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList  editTodo={editTodo} deleteTodo={deleteTodo} todos={todos}/>
     
    </>
  )

}

export default App
