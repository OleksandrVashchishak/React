import React from 'react';
import './App.css';
import TodoList from './todo/TodoList';
import Context from './context'
import AddTodo from './todo/AddTodo';

const App = () => {
  let [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'To buy bread'},
    {id: 2, completed: true, title: 'To buy oil'},
    {id: 3, completed: false, title: 'To buy laptop'}
    ]) 


    
const toggleTodo = (id) => {
  setTodos(
    todos.map( todo => {
  if(todo.id === id){
    todo.completed = !todo.completed
  }
  return todo
})
)
}

const removeTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
}

const addTodo = (title) => {
  setTodos(todos.concat([{
    title,
    id: todos.length + 1,
    completed: false
  }]))
}

  return (
    <Context.Provider value={{removeTodo}}>
  <div>
    <h1>React todo list</h1>
    {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p className='empty'>Empty</p>}
  </div>
  <AddTodo onCreate={ addTodo }/>
  </Context.Provider>
  );
}

export default App;
