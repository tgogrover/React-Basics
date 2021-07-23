import React, { Component } from 'react'
import './bete.css'
export default class YesNo extends Component {
    constructor(){
        super()
        this.state ={
            red:'Unauthorised User'
        }
    }
    chalo(){
        return <h1 className="bete">{this.state.red}</h1>
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.chalo()}} >button</button>
            </div>
        )
    }
}
