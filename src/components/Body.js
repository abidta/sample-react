import { Component } from "react";
// class component example
class Body extends Component{
    render(){
        return(
            <h1>This is a Body {this.props.data}</h1>
        )
    }
}
export default Body