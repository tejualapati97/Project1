import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo]=useState("");
    const [list, setList]=useState([]);
    const handleAdd=()=>{
        if(todo !=="")
        setList([...list, todo])
        setTodo("")
    }
  return (
    <>
    <h1>Todo</h1>
    <input type='text' value={todo} onChange={(e)=> setTodo(e.target.value)}/>
    <button onClick={handleAdd}>Add</button>
    <div>
        {
            list.map((item,index)=>{
            return    <li key={index}>{item}</li>
            })
        }
    </div>
    </>
  )
}

export default Todo