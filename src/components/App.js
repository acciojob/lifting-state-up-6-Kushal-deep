
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
  { task: "Learn React", completed: false },
  { task: "Built a React app", completed: false },
  { task: "Deploy the React app", completed: false }])
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <Child todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

// - {item.completed ? "✅ Completed" : "❌ Not Completed"}

const Child = ({todos,handleComplete}) => {
  return(
    <>
    <h2>Child component</h2>

    {
      todos.map((item,index)=>(
        <div key={index}>
          <li style={{display:"inline"}}>{item.task} 
           {!item.completed && (
            <button onClick={() => handleComplete(index)}>Complete</button>
          )}
          </li>


        </div>

      ))
    }
    
    
    </>

  )
}

export default App
