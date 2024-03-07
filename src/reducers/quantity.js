const initialState = 0;
const updateQuantity = (state=initialState, action)=>{
    switch(action.type){
        case "QUANTITY" : return  state=action.payload;
        default: return state;
    }
}
export default updateQuantity;