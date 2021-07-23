import React, { Component } from 'react'

 class SetStateClass extends Component {
constructor(){
    super()
    this.state={
        message:1
    }
}

chaloKrtePhir(){
    this.setState((pichla)=>
    {
    return ({message:pichla.message + 1})

    })
    
};
    
    biGDo(){
        this.chaloKrtePhir()
        this.chaloKrtePhir()
    }
    // ({message:"ho gya"},()=>{
    //     console.log(this.state.message)
    // })
    // this.setState
    // ({message:"hat na"})

    //console.log(this.state.message)


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
               <button onClick={()=>{this.biGDo()}}>Bs Ki Hai to Click kr</button> 
            </div>
        )
    }
}


export default SetStateClass

