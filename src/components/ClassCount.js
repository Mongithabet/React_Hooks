import React, { Component } from 'react'


export class ClassCount extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    componentDidMount(){
      document.title   
 }

    render() {
        return (
            <div>
               <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default ClassCount
