import { useState } from "react";
import "./assets/App.css";
import Tasks from "./components/AddTask";
function App() {
  const [tasks, setTaks] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [filterBy, setFilterBy] = useState(0);
  const handleAddTask = (item) => {
    setTaks([...tasks, { value: item, clicked: false }]);
  };
  const handleclick = (index) => {
    const updateTask = [...tasks];
    updateTask[index].clicked = !updateTask[index].clicked;
    setTaks(updateTask);
  };

  const handleDeleteTasks = (index) => {
    const updateDeleteTask = [...tasks];
    updateDeleteTask.splice(index, 1);
    setTaks(updateDeleteTask);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterBy === 1) {
      return !task.clicked;
    } else if (filterBy === 2) {
      return task.clicked;
    } else {
      return true;
    }
  });

  const lists = filteredTasks.map((task, index) => (
    <li key={index}>
      <p
        style={{
          textDecoration: task.clicked ? "line-through" : "none",
          color: task.clicked ? "rgb(153, 153, 153)" : "none",
          backgroundColor: task.clicked ? "whitesmoke" : "none",
        }}
        onClick={() => handleclick(index)}
      >
        {task.value}
      </p>
      <button onClick={() => handleDeleteTasks(index)}>Delete</button>
    </li>
  ));
  return (
    <div className="App">
      <h1>Todo Mv</h1>
      <Tasks add={handleAddTask} />
      <div className="ListContent">
        <ul>{lists}</ul>
      </div>
      {tasks.length ? (
        <div className="filter">
          <p>Filtrer par : </p>
          <ul>
          <li onClick={()=>setFilterBy(0)}>
              <h6>All</h6>
            </li>
            <li onClick={()=>setFilterBy(1)}>
              <h6>Active</h6>
            </li>
            
            <li onClick={()=>setFilterBy(2)}>
              <h6>Disable</h6>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default App;
