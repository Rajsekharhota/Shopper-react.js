import { legacy_createStore as createStore } from "redux";
import rootReducer from "./Reducer";

let Store = createStore(rootReducer);

export default Store;
