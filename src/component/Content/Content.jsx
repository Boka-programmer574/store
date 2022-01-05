import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import style from "./Content.module.css";

const Content = (props) => {
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    fetch("https://61cd7a817067f600179c5ac1.mockapi.io/Guitar")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  },[]);

  
  return (
    <div className={style.cont}>
      <div className={style.text}>
        <h1>All instruments</h1>
        <input className={style.inp} type="text" />
        <button>Search</button>
      </div>
      <div className={style.card}>
        {items.map((index) => (
          <Cards
            key={index.nameUrl}
            name={index.name}
            price={index.price}
            nameUrl={index.nameUrl}
            addPlus={(name) => {
              props.addToBasket(name)
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
