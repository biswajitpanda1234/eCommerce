import changeCartItems from "./cart";
import  updatePrice from "./price"
import  updateQuantity from "./quantity"
import {combineReducers} from "redux";
const rootReducer = combineReducers({
    changeCartItems,
    updatePrice,
    updateQuantity
})

export default rootReducer;