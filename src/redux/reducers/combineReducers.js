import { combineReducers } from "redux";
import handleWishlist from "./wishlistReducer";

const rootReducers = combineReducers({
    wishlist: handleWishlist,
});

export default rootReducers;