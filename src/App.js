import React, {useState, useEffect} from 'react';
import {Container, Row, InputGroup, FormControl} from 'react-bootstrap'
import TodoList from './totoList'
import {Context} from './Context'
function App() {

  const [todos, setTodos] = useState([]);
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
useEffect(()=>{
  const list = localStorage.getItem('todos') || []
  setTodos(JSON.parse(list));
}, [])

useEffect(()=>{
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])

const toggle = id => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.complited = !todo.complited;
      }
      return todo
    }))
  }
const remove = id => {
    setTodos(todos.filter(todo => {
      return todo.id !== id
    }))
}
  return (
    <Context.Provider value={
      {toggle, remove}
    }>
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
    </Context.Provider>
  );
}

export default App;
