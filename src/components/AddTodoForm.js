import React,{useState} from 'react'

export const AddTodoForm = ({addNewTodo}) => {
   

    const [addTodo, setAddTodo] = useState('')
    const handleTodo=(e)=>{
        e.preventDefault()
        addNewTodo(addTodo)
        setAddTodo('')
console.log('object')
    }
    return (
        <form className="mt-4" onSubmit={handleTodo}>
            <div className="card card-body">
            <div className="form-group">
            <label>Ajouter Todo</label>
            <input className="form-control" value={addTodo} type="text" onChange={(e)=>setAddTodo(e.target.value)}  />
            <input className="btn btn-success mt-4" type="submit"/>
       </div>
       </div>
       </form>
    )
}
