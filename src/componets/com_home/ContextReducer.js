import React, { Children, createContext, useContext, useReducer } from "react";


const CartStateContext = createContext();
const cartDispatchContext = createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,price:action.price,qty:action.qty, img:action.img}]
        
            default:
                console.log("error in reducer");
    }
}

export const CartProvider = ({Children})=>{
    const [state,dispatch]= useReducer(reducer,[])
    return(
        <cartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {Children}
            </CartStateContext.Provider>
        </cartDispatchContext.Provider>
    );
}

export const useCart = useContext(CartStateContext);
export const useDispatchCart = useContext(cartDispatchContext);