import { createContext, useEffect, useState } from "react";
import { foodList } from "../assets/assets";

export const StoreContext = createContext(null)

const StorContextProvider = (prop)=>{

    const [cartItems,setCartItems] = useState({})

    const addToCart = (itemId)=>{
        if (!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
   const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = foodList.find(
                (product) => product.id === Number(item) // convert item to number
            );
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
    }
    return totalAmount;
};


        const ContextValue = {
            foodList,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            getTotalCartAmount
        }
        
        return(
            <StoreContext.Provider value={ContextValue}>
                {prop.children}
            </StoreContext.Provider>
        )
}

export default StorContextProvider