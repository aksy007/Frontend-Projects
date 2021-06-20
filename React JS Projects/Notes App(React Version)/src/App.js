import React,{useState , useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import AppendNotes from './components/AppendNotes';
import DisplayNotes from './components/DisplayNotes';

function App() {

  const [note,setnote] = useState([]);
  
  useEffect(()=> {getLocalNotes()},[]);
  useEffect(()=>{saveLocalNotes()},[note]);

  //Local Storage
  const saveLocalNotes = () => {
      localStorage.setItem("note", JSON.stringify(note));
  };

  const getLocalNotes = ()=>{
    if(localStorage.getItem("note") === null)
      localStorage.setItem("note" , JSON.stringify([]));
    else{
      let localNotes = localStorage.setItem("note", JSON.stringify(note));
      console.log(localNotes);

    } 
  };

  return (
    <div className="App">

      <Header />    
      <AppendNotes note={note} setNote={setnote} />
      <DisplayNotes  note={note} setNote={setnote}/>

    </div>
  );
}

export default App;
