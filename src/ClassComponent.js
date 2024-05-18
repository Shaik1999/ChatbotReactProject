import React from "react";
import './ClassComponent.css';

// class ClassComponent extends React.Component{
//     state = {
//         counter : 0
//     }
//     render(){
//         return(
//             <div>
//                      <h1>Counter : {this.state.counter}</h1>
//                      <button onClick={() => {this.setState({
//                         counter: ++this.state.counter
//                      })}}>click</button>
//             </div>
//         )
//     }
// }


//   class ClassComponent extends React.Component{
//     state = {
//         IsToggle : false
//     }
//     render(){
//         return(
//             <div>
//                 <p>Switch is : {this.state.IsToggle ? "On" : "Off"}</p>
//                 <button onClick={() => {this.setState((prevState) => ({
//                     IsToggle : !prevState.IsToggle
//                 }))}}>click</button>
//             </div>

//         );
//     }
//   }


// class ClassComponent extends React.Component{
//     state = {
//         username : '',
//         password : ''
//     }

//     handleChange = (event) => {
//        this.setState({[event.target.name] : event.target.value})
//     }

//     handleSubmit = (event) => {
//        event.preventDefault();
//        console.log(this.state);
//     }
//     render(){
//         return(
//             <form>
//                 <input type="text" name="username" placeholder="Enter name" onChange={this.handleChange}/>
//                 <br></br>
//                 <input type="password" name="password" placeholder="Enter password" onChange={this.handleChange}/>
//                 <br></br>
//                 <button onClick={this.handleSubmit}>submit</button>
//             </form>
//         )
//     }
// }

class ClassComponent extends React.Component {

    state = {
        product: "Real me 8 pro",
        price: 20000
    }

    UpdatePrice = () => {
        let inputfield = document.getElementById('inputField');
        this.setState({
            product: "Real me 8 pro",
            price: inputfield.value
        });
    }

    render() {
        return (
            <div>
                {/* <h1>{this.state.product}</h1>
                <h1>{this.state.price}</h1>
                <input type="text" id="inputField"/>
                <button onClick={this.UpdatePrice}>Update</button> */}
            </div>
        )
    }
}

export default ClassComponent;



