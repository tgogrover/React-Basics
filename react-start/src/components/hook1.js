import React , {useState}from 'react'

function Hook1() {

    const [pehla,experience]=useState(0)
    console.log(pehla)
   const  meriMerzi=()=>{
        for( var i=0;i<=10;i++){
            experience((glti)=>{return  glti-1}
                )
        }
    }
    return (
        <div>
            <div>pehla={pehla}</div>
            <button onClick={()=>experience(pehla+2)}>simply</button>
            <button onClick={meriMerzi}>chlo shurwat kre</button>
        </div>
    )
}

export default Hook1
