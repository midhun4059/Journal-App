import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import TodoCard from './Components/TodoCard'
import { useState } from 'react';

const App = () => {
  

  const [todos,setTodos]=useState(['Workout at morning  ','Eating good food  ','Sleep early  ','Work from home '])
  const[todoValue,setTodoValue]=useState('');

  const handleAddTodos=(newTodo)=>{
   const listOfTodos=[...todos,newTodo]
   setTodos(listOfTodos)

   const deleteTodo=(index)=>{
const newList=todos.filter((todo,todoIndex)=>{
  return todoIndex !==index
})
   setTodos(newList)
  }

  const editTodo=(index)=>{
    const EditedList=todos[index]
    setTodoValue(EditedList)
    deleteTodo(index)
  }

  return (
    <>
      <TodoInput  todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList  editTodo={editTodo} deleteTodo={deleteTodo} todos={todos}/>
     
    </>
  )
}
}

export default App
