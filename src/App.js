import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [tasks, setTasks] = useState([]);

  function deleteHandler(i) {
    let copyTask = [...tasks];
    copyTask.splice(i, 1);
    setTasks(copyTask);
  }

  let renderTask = <li><h3>No Task available </h3></li>

  if (tasks.length > 0) {
    renderTask = tasks.map((t, i) => {
      return (
        <>
          <li key={i}>
            <h3>{t.title}</h3>
            <h3>{t.desc}</h3>
            <button onClick={() => { deleteHandler(i) }}>Delete</button>
          </li>
        </>
      );
    })
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className='TaskInput'>
        <input type='text' placeholder='Enter the Title' value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}>
        </input>

        <input type='text'id='descp' placeholder='Enter your Task' value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}>
        </input>

        <button onClick={() => {
          if(title != "" || desc != ""){
            setTasks([...tasks, { title, desc }]);
            setTitle("");
            setDesc("");
          }
        }}>Add Task</button>
      </div>
      <div className='TaskAdded'>
        <h1>Todays Tasks</h1>
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  );
}

export default App;
