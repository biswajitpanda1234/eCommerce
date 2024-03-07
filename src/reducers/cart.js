const initialState = [];
const changeCartItems = (state=initialState, action)=>{
    switch(action.type){
        case "CART" : return  state=action.payload;
        default: return state;
    }
}
export default changeCartItems;