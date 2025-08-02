import { useState } from "react"

function Counter(){
    //here count is a simple variable which does not provude memory
    //let count=0;
    //count is a state which provide memory and function setCount to update count state
    //let [myState,setMyState]=useState(default value)
    let [count,setCount]=useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>click me </button> <br/>
            <button onClick={()=>setCount(count-1)}>click me </button>
            </div>
    )

}
export{Counter}
