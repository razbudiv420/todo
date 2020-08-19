import React from 'react'

const Todo = ({id, title, complited}) => {
    return (
    
           <li className="todo">
      <label>
        <input
          type="checkbox"
          defaultChecked={false}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
    );
}

export default Todo