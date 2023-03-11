export const reducer = (state, action) =>{
    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            item: state.item.filter((curElem)=>{
                return curElem.id !== action.payload;
            })
        };
    }

    if(action.type === "CLEAR_CART")
    {
        return {...state, item: []};
    }

    if(action.type === "CHECKOUT")
    {
        alert("Payment Successfull!!!");
    }

    if(action.type === "INCREMENT"){
        let updatedCart =state.item.map((curElem) =>{
            var initPrice = Number(curElem.initPrice);
            console.log(initPrice)
            if(curElem.id === action.payload){
        
                return{...curElem, quantity:curElem.quantity + 1,price:Number(curElem.price)+initPrice};
                
            }
            return curElem;
        });

        return {...state, item: updatedCart};
    }

    if(action.type === "DECREMENT"){
        let updatedCart =state.item.map((curElem) =>{
            if(curElem.id === action.payload){
                return{...curElem, quantity:curElem.quantity - 1};
            }
            return curElem;
        }).filter((curElem)=>curElem.quantity !== 0);

        return {...state, item: updatedCart};
    }


    if(action.type === "GET_TOTAL"){
        let { totalItem, totalAmount } = state.item.reduce((accum, curVal)=>{ 
            let { price, quantity } = curVal;
            let updatedTotalAmount = Number(price);
            accum.totalAmount += updatedTotalAmount;
            accum.price+=price;
            accum.totalItem += quantity;
            return accum; 
        },{
            totalItem: 0,
            totalAmount: 0,
        });
        return{...state, totalItem, totalAmount };
    }
    return state;
};