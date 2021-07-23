import React ,{useState} from 'react'

function Hook2() {
    const [empty,fill]=useState({
        Name:"",
        Roll_No:""
    })
    // const Information=(event)=>{
    //     fill({
    //         Name:event.target.value,
    //         Roll_No:event.target.value
    //     })

    // }

    return (
        <div>
            <input type='text' value={empty.Name} onChange={(e)=>fill({...empty,Name:e.target.value})}></input>
            <input type='number' value={empty.Roll_No} onChange={(e)=>fill({...empty,Roll_No:e.target.value})}></input>
            <h1>name={empty.Name}</h1>
            <h1>Roll No.={empty.Roll_No}</h1>
           {/* <button onClick={Information}>submit
           </button>  */}
        </div>
         
    )
    console.log(empty.Roll_No)
}

export default Hook2
