import React from "react";
import './ClassComponent.css';
import bellIcon1 from './bellIcon1.png';
import bellIcon2 from './bellIcon2.png';

class StateComponent extends React.Component{
    // styles = {
    //     color : "blue",
    //     textAlign : "center"
    // }
    // state = {
    //     message : "subscribe to channel",
    //     btnvalue : "subscribe",
    //     img : bellIcon1
    // }
    
    // onbuttonChange = () => {
    //     this.setState({
    //         message : "Please click on the bell icon to never miss an update",
    //         btnvalue : "subscribed"
    //     })
    // }
    // onImageChange = () => {
    //     this.setState({
    //         message : "Thank you. Happy Learning",
    //         img : bellIcon2,
    //     }, this.displayState)
    // }

    // displayState = () => {
    //     console.log(this.state);
    // }
    render(){
        return(
              <div style={{textAlign:"center"}}>
                {/* <h1 style={this.styles}>Welcome</h1>
                <p style={{fontStyle: "italic", color:"purple"}}>{this.state.message}</p>
                <button onClick={this.onbuttonChange}>{this.state.btnvalue}</button>
                <br></br>
                <img style={{width : "30px", height: "30px", marginTop:"20px"}} src={this.state.img} alt="" onClick={this.onImageChange}></img> */}
              </div>
        )
    }
}

export default StateComponent;