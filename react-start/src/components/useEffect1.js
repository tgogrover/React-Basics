import React ,{useState,useEffect}from 'react'

function UseEffect1() {
    const [first,change]=useState(0);
    const [pehla,badlav]=useState('');
   useEffect( ()=>{document.title=`you clicked  ${first} times`
   console.log('likh de')
},[first])
    return (
        <div>
            <input  value={pehla} onChange={(event)=>{return badlav(event.target.value)}}></input>
            <button onClick={()=>{ return change(first+1)}}>we clicked {first} times</button>
        </div>
    )
}

export default UseEffect1
