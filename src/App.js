import React from "react";
import "./App.css";
import ShoppingIndex from "./components/ShoppingIndex";
import Store from "./ShopRedux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <div style={{ margin: "0", padding: "0" }}>
      <Provider store={Store}>
        <ShoppingIndex />
      </Provider>
    </div>
  );
}

export default App;
