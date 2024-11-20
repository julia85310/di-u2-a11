import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Comprar leche', done: true },
  { id: 1, title: 'Comer tacos', done: false },
  { id: 2, title: 'Preparar té', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {id: todos.length, title: title, done:false}
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map((todo => {
      if(todo.id == nextTodo.id){
        return nextTodo;
      }
      return todo;
    })));
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => 
      todo.id !== todoId
    ));
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
