export function ToDoItem({completed, id, title,toggleToDo, deleteToDo}){
    return (
        <li key={todo.id}>
            <label>
              <input type="checkbox" 
              checked={completed} 
              onChange={ e => toggleToDo(todo.id, e.target.checked)} />
              {title}
            </label>
            <button 
            onClick={() => deleteToDo(id)} 
            className="">Delete</button>
          </li>
    )
}