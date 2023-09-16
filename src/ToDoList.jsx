import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos, toggleToDo, deleteToDo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Tasks"}
      {todos.map((todo) => {
        return (
          <ToDoItem
            {...todo}
            key={todo.id}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
          />
        );
      })}
    </ul>
  );
}
