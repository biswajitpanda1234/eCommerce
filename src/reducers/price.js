const initialState = 0;
const updatePrice = (state=initialState, action)=>{
    switch(action.type){
        case "PRICE" : return  state=action.payload;
        default: return state;
    }
}
export default updatePrice;