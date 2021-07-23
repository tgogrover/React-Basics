import React, { Component } from 'react'

 class StateByClass extends Component {
    constructor(){
        super()
        this.state={
            message:"state working successsfully"
        }

    }
    render() {
        return (
            <div>
                <h1>
                {this.state.message}
                </h1>

            </div>
        )
    }
}

export default StateByClass
