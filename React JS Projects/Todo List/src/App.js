import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  const [inputText,setInputText] = useState('');
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);

  useEffect(()=>{filterHanler();},[todos,status]);

  const filterHanler = ()=>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo=> todo.completed === true ));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo=> todo.completed === false ));
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>  
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos}  
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />

    </div>
  );
}

export default App;
