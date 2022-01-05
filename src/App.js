import React, { useState } from "react";
import "./App.css";
import Content from "./component/Content/Content";
import Header from "./component/Header/Header";
import Basket from "./component/Navbar/Basket/Basket";
import Navbar from "./component/Navbar/Navbar";

function App() {

  const [drawer, setDrawer] = useState(false)
  const [basketItems, setBasketItems] = useState([])

  return (
  <div className="app">
    {drawer ? <Basket items={basketItems} drawer={basketItems} closeBasket={() => setDrawer(false)} /> : null}
    <Header />
    <Navbar basketClick ={() => setDrawer(true)}/>
    <Content
    addToBasket={(item) => {
      setBasketItems(basketItems.concat(item))
    }} />
    
  </div>
  )
}

export default App;
