import React, { useState } from 'react'

const TodoInput = (props) => {
  const{handleAddTodos,todoValue,setTodoValue}=props

 return (
    <header>
      <input value={todoValue}  onChange={(e)=>{setTodoValue(e.target.value)}} className='inputField' placeholder='Enter the task' />
      <button onClick={()=>{
        handleAddTodos(todoValue)
         setTodoValue('') }} 
       className='button'>ADD TO LIST</button>
    </header>
  )
}

export default TodoInput
