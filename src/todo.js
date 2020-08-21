import React, {useState} from 'react'

const Todo = ({id, title, complited}) => {
   const [checked, setChecked] = useState(complited);
   const cls =['todo'];
   if(checked) {
     cls.push('completed')
   }

  return (
           <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={()=>setChecked(!checked)}
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