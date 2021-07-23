import React,{Component} from 'react' ;


class ClassComponent extends Component{
   
    render(){
        const {props,destructuring,children}=this.props
        return <div>
            <h1>
            Class component and {props} {destructuring} working Successfully
        </h1>
        <p> {children}</p>
        </div>
        
        
    }
}

export default ClassComponent

