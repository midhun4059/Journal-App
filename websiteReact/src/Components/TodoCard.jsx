const TodoCard = (props) => {
  const {children,deleteTodo,index,editTodo}=props
  return (
    <div>
     <li className='todoItem'>
      <p>  {children}  </p>
     <div className='actionContainer'>
     
      <button onClick={()=>editTodo()}>
      <i className="fa-solid fa-pen-to-square"></i> 
      </button>


<button onClick={()=>deleteTodo(index)}>
 <i className="fa-solid fa-trash"></i>
</button>
      </div>
     </li>
    </div>
  )
}

export default TodoCard
