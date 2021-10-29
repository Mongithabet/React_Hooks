import React,{useState,useEffect} from 'react'

function FonctionCount() {
    const [count, setCount]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
 document.title=`Vous avez clique ${count} fois`
        },5000)
       
    })
    return (
        <div>
           <h1>{count}</h1> 
           <button onClick={()=>setCount(count+1)}>Cliquer</button>
        </div>
    )
}

export default FonctionCount
