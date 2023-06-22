import { combineReducers } from "redux";

function AddToCartReducer(state = [], Action) {
  switch (Action.type) {
    case "AddToCart":
      const newState = [...state, Action.payload];
      localStorage.setItem("cartItems", JSON.stringify(newState));
      return newState;
    case "RemoveFromCart":
      const updatedState = state.filter(
        (data) => data.id !== Action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedState));
      return updatedState;
    case "MODIFIED":
      const modifiedState = state.map((item) => {
        if (item.id === Action.payload.id) return Action.payload;
        else return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(modifiedState));
      return modifiedState;
    case "FETCH_DATA":
      return Action.payload;
    default:
      return state;
  }
}

let rootReducer = combineReducers({ AddToCartReducer });
export default rootReducer;
