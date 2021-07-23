import React, { Component } from 'react'

export default class FormHandling extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'mai nhi' ,
            bhindi:''
        }
        this.usernameHandler = this.usernameHandler.bind(this);
   
    }
    usernameHandler(event){
        this.setState({
            bhindi:event.target.bhindi
        })

    }
    render() {
        return (
            <div>
                <form>
                    <div>
                    <label>chuno select karo</label>
                    <select value={this.state.username}>
                        <option value="gtgyg">cgrvg</option>
                        <option value='mai nhi'>Coconut</option>
                    </select>
                    </div>
                    <div>

                    <label>enter kro</label>
                    <input type='text' value={this.state.bhindi} 
                    onChange={this.usernameHandler}></input>
                    </div>
                </form>
            </div>
        )
    }
}
