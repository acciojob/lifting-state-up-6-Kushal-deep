
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

   const [todos,setTodos]=useState([ 
  { task: "Learn React", completed: false },
  { task: "Built a React app", completed: false },
  { task: "Deploy the React app", completed: false }])

 const handleComplete = (index) => {
  const updatedTodos = todos.map((todo, i) =>
    i === index ? { ...todo, completed: true } : todo
  );
  setTodos(updatedTodos);
};

 
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
    <h2>Child </h2>
<ul>
    {
      todos.map((item,index)=>(
        
          <li  key={index} >{item.task} 
          {!item.completed &&(
            <button onClick={() => handleComplete(index)}>Complete</button>
          )}
          </li>
          


        

      ))
    }
    </ul>
    
    
    </>

  )
}

export default App
