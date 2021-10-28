import React,{useState} from 'react'
import uuid from 'uuid'
import { AddTodoForm } from './AddTodoForm'

export const Todo = () => {
 const [todos,setTodos] =  useState([
        {id:1, todo: 'Acheter du lait'},
        {id: 2 , todo: 'Acheter du pain'},
        {id: 3 , todo: 'Acheter du Fromage'}

    ])
   const [warning,setWarning] = useState(false)
  const myTodos=  todos.map((todo)=>{
      return (
          <li className="list-group-item" key={todo.id}>{todo.todo}</li>
      )
    })
    const addNewTodo=(newTodo)=>{
        if (newTodo !== '') {
            warning && setWarning(false)
            setTodos([
                ...todos,{
                  id: uuid(),
                  todo : newTodo 
                }
                
            ])
        } else {
            setWarning(true)  
        }
        
    }
    const warningMsg= warning && <div className="alert alert-danger mt-5" role="alert">
    Veiller indiquer un todo
  </div>
    return (
        <div>
            {warningMsg}
            <h1 className="text-center">To-Do: {todos.length}</h1>
            <ul className="list-group">
                {myTodos}

            </ul>
            <AddTodoForm addNewTodo={addNewTodo}/>
        </div>
    )
}
