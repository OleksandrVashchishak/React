import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

const TodoList = (props) => {
return(
    <ul className='todo-wrapper'>
    {props.todos.map( todo => {
      return <TodoItem todo={todo} key={todo.id} checkChange={props.onToggle}/>
    })}
    </ul>
) 
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList