import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import Context from '../context'

const TodoItem = ({todo, checkChange}) => {
    const{ removeTodo } = useContext(Context)
   let classes = []
if(todo.completed){
    classes.push('done')
}
    return (
        <li className='todo-item'>
            <p>
             <input checked={todo.completed} type="checkbox" onChange={() => checkChange(todo.id, todo.completed)}/>
              <span >{todo.id}. </span>
              <span className={classes.join(' ')}>  {todo.title} </span>
                 </p>
                 <button onClick={ () => removeTodo(todo.id)}>&times;</button>
                </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    checkChange: PropTypes.func.isRequired
}


export default TodoItem