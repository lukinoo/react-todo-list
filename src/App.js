import './styles/main.css';
import Header from './components/header';
import Form from './components/form';
import Todo from './components/todo';
import { useState } from 'react';

function App() {  
  const [inputValue,setInputValue] = useState('');
  const [todos,setTodos] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form inputValue={inputValue} setInputValue={setInputValue} todos={todos} setTodos={setTodos} />
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map(todo => (
            <Todo key={todo.id} text={todo.text} checked={todo.checked} color={todo.color} todo={todo} todos={todos} setTodos={setTodos} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
