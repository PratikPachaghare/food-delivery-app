import React, { Children, createContext, useReducer, useState } from "react";
import {useDispatchCart,useCart} from "./ContextReducer.js";


export default function Card(props){
    let dispatch = useDispatchCart();
    let options = props.option;
    let priceOptions = Object.keys(options);
    const [qty,setQty] = useState(1); 
    const handelAddCard = async ()=>{
        await dispatch({type:"ADD", id:props.foodItem._id,name:foodItem.foodName,  price:props.finalPrice, qty:qty, img:props.img})
    }

    return(
        <>
        <div className="bg-white rounded-lg shadow-md  w-48 m-3">
      <img src={props.img} className="w-48 h-48 rounded-md"></img>
      <h2 className="text-lg font-medium mt-2">{props.name}</h2>
      <p className="text-gray-600 mt-1">{props.discription}</p>
        <select className="" onChange={(e)=> setQty(e.target,value)}>
            {Array.from(Array(10),(e,i)=>{
                return <option key={i+1} value={i+1}>{i+1}</option>
            })}
        </select>
    <hr/>
    <div className="flex justify-between">
      <p className="text-green-500 font-bold mt-2">₹{200}</p>
      <button className="bg-green-500 p-4 h-9 text-white text-center hover:bg-blue-500  py-2 rounded" onClick={handelAddCard} >Add+</button>

    </div></div>
        </>
    );
}