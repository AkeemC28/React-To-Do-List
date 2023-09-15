export function toDoList({todos, toggleToDo, deleteToDo}){


    return(
        <ul className="list">
        {todos.length === 0 && "No Tasks"}
        {todos.map((todo) => {
          return (
            <ToDoItem 
            id={todo.id} 
            completed={todo.completed} 
            title={todo.title} 
            key={todo.id}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo} />
          )
        })}
      </ul>
    )
}