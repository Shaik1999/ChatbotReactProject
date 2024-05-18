import React, { useState } from "react";
import bellIcon1 from './bellIcon1.png'
import bellIcon2 from './bellIcon2.png'

// function FunctionalComponent() {
//     // let counter = 0;
//     let [counter, updateCounter] = useState(0);
//     return (
//         <div>
//             {/* <h1>Counter : {counter}</h1>
//             <button onClick={() => {updateCounter(counter++)}}>click</button> */}
//         </div>
//     )

//     // function UpdateCounter() {
//     //     ++counter;
//     //     console.log(counter);
//     // }
// }

// function FunctionalComponent(){
//     let [message, setMessage] = useState("subscribe to channel");
//     let [btnValue, setBtnValue] = useState("subscribe");
//     let [img, setImage] = useState(bellIcon1);

//     let onbuttonChange = () => {
//         setMessage("please click on the bell icon to never miss an update");
//         setBtnValue("subscribed");
//     }

//     let onImageChange = () => {
//         setMessage("Thank you. Happy learning");
//         setImage(bellIcon2);
//         console.log(message, btnValue, img);
//     }
//     return(
//         <div style={{textAlign: "center"}}>
//             <h1 style={{color:"blue"}}>Welcome</h1>
//             <p style={{fontStyle:"italic", color:"purple"}}>{message}</p>
//             <button onClick={onbuttonChange}>{btnValue}</button>
//             <br></br>
//             <img style={{width: "30px", height: "30px", marginTop: "20px"}} src={img} alt="" onClick={onImageChange}></img>
//         </div>
//     )
// } 

// function FunctionalComponent(){
//     let [product, updateProduct] = useState("Real me 8 pro");
//     let [price, updatePrice] = useState("20000");

//     let handleUpdatePrice = () => {
//         let inputfield = document.getElementById('inputField');
//         updatePrice(inputfield.value);
//     }
//     return(
//         <div>
//             <h1>Product : {product}</h1>
//             <h1>Price is : {price}</h1>
//             <input type="text" id="inputField"/>
//             <button onClick={handleUpdatePrice}>Update</button>
//         </div>
//     );
// }

function FunctionalComponent(){
    let[counter, updateCounter] = useState(0);

    let handleUpdate = () => {
        updateCounter(++counter);
    }
    return (
        <div>
            <h1>Counter is : {counter}</h1>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default FunctionalComponent;