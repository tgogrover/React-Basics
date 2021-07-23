import React ,{useState}from 'react'

function Hook3() {
    const [khali,array]=useState([]);

  
    const itemFill=()=>{ array([...khali,{id:khali.length,value:Math.floor(Math.random()*10)+1}])

}
    return (
        <div>
            <button onClick=  {itemFill}> bhrde</button>
         <div>
             <ul>
                 {
                     khali.map((items)=>{
                         return(
                         <li key={items.id}>
                             {items.value}
                            </li>
                         )

                     })
                 }
             </ul>
         </div>
        </div>
    )

}

export default Hook3
