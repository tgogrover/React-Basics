import React,{useState} from 'react'
import UseEffect2 from './useEffect'

function HookCleanUp() {
    const [dirty,clean]=useState(true)
    return (
        <div>
            <button  onClick={()=>{clean(!dirty)}}>clean</button>
            {dirty && <UseEffect2 />}
        </div>
    )
}

export default HookCleanUp
