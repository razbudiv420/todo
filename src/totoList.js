import React from 'react'
import Todo from './todo.js'
const TodoList = ({todos}) => {
   return (<ul>
        {todos.map( todo => <Todo key = {todo.id} {...todo} />)}
    </ul>
   );
}

export default TodoList