import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/students')
      .then(res => res.json())
      .then(data =>  setStudents(data))
  }, [])
    
  return (
    <div className="App">
      <header className="App-header">
<h1>Lista de estudiantes</h1>
{
  students?.map(student => (
    <div key={student.id}>
      <h2>{student.nombre}</h2>
      <p>{student.edad}</p>
      <p>{student.ciudad}</p>
      <p>{student.pais}</p>
    </div>
  ))
}
      </header>
    </div>
  );
}

export default App;
