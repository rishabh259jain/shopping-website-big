import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

//export the same value that is returned by the combineReducers() function after passing user:userReducer parameter.
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});

/*
This redux styled state can be thought of like following state without redux:

this.state = {
    user : {
        currentUser: INITIALIZED_VALUE(null)
    },
    cart : {
        hidden: INTIALIZED_VALUE(true)
    }
}
------------------OR(conceptually)-----------------
this.state.user = {
    currentUser: null (INITIAL VALUE)
}
this.state.cart = {
    hidden: true (INITIAL VALUE)
}

*/
