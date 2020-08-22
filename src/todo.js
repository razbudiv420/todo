import React, {useContext} from 'react'
import {Context} from './Context'
const Todo = ({id, title, complited}) => {
   const {toggle, remove} = useContext(Context);
   const cls =['todo'];
   if(complited) {
     cls.push('completed')
   }
  

  return (
           <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={complited}
          onChange={()=>toggle(id)}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={()=> remove(id)}
        >
          delete
        </i>
      </label>
    </li>
    );
}

export default Todo