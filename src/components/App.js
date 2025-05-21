
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

 const handleComplete = (index) => {
  const updatedTodos = todos.map((todo, i) =>
    i === index ? { ...todo, completed: true } : todo
  );
  setTodos(updatedTodos);
};

  const [todos,setTodos]=useState([ 
  { task: "reading", completed: false },
  { task: "dancing", completed: false },
  { task: "sleeping", completed: false },
  { task: "coding", completed: false }])
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <Child todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}


const Child = ({todos,handleComplete}) => {
  return(
    <>
    <h2>Child component</h2>

    {
      todos.map((item,index)=>(
        <div key={index}>
          <li style={{display:"inline"}}>
            {item.task} - {item.completed ? "✅ Completed" : "❌ Not Completed"}
          </li>
           {!item.completed && (
            <button onClick={() => handleComplete(index)}>Complete</button>
          )}

        </div>

      ))
    }
    
    
    </>

  )
}

export default App
