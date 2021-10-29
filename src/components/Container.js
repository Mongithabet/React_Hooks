import React,{useState} from 'react'
import FunctionDisplayKey from './FunctionDisplayKey'
function Container() {

    const [show,setShow]=useState(true)
  const btnDisplay= show ? 'Cacher' : 'Afficher'
    return (
        <div className="text-center">
            <button className="btn btn-primary mt-3" onClick={()=>setShow(!show)} >{btnDisplay}</button>
            {show && <FunctionDisplayKey/>}
            
        </div>
    )
}

export default Container
