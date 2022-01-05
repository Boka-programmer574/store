import React from "react";
import style from "./Basket.module.css";

const Basket = (props) => {
  debugger
  return (
    <div>
      <div className={style.basket}>
        <h3>Basket</h3>
      
        <button onClick={props.closeBasket}>close</button>
      </div>
      {props.basketItems.map((item) => (
        <div className={style.items}>
          <img width={150} height={139} src={item.nameUrl} alt="cards" />
          <p>{item.name}</p>
          <b>{item.price}</b>
        </div>
      ))}
    </div>
  );
};

export default Basket;
