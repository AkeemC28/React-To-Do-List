import { useState } from "react";
import { NewToDoForm } from "./NewForm.jsx";
import { ToDoList } from "./ToDoList.jsx";



// import ".style.css"

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('Item')
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

useEffect(() => {
  localStorage.setItem('Item', JSON.stringify(todos))
},[todos])


  function addToDo(title){
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }


  function toggleToDo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo; 
      });
    });
  }
  

  function deleteToDo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }

  return (
    <>
      <h1 className="header">To Do List</h1>
      <NewToDoForm onSubmit={addToDo} />
      <ToDoList todos={todos} toggleTodo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  );
  
