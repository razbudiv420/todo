import React, {useState} from 'react';
import {Container, Row, InputGroup, FormControl} from 'react-bootstrap'
import TodoList from './totoList'

function App() {

  const [todos, setTodos] = useState([
    {id: 1, title: 'title', complited: false},
    {id: 2, title: 'title', complited: false}
  ]
  )
  const [todoTitle, setTitle] = useState('');
  const inputHandler = event => {
    if (event.key === 'Enter') {
      setTodos([...todos,
          {
            id: Date.now(),
            title: todoTitle,
            complited: false
          }
      ])
      setTitle('');
    }
  }
  return (
    <div className="App">
     <Container className="">
       <Row>
        <h1>Todo List</h1>
       </Row>
       <Row>
       <InputGroup className="mb-3">
    <FormControl value={todoTitle} onChange={event => setTitle(event.target.value)} onKeyPress={inputHandler} placeholder="todo"/>
  </InputGroup>
       </Row>
       <TodoList todos = {todos}/>
     </Container>
    </div>
  );
}

export default App;
