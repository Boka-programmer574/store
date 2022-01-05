import React, { useEffect, useState } from "react";
import style from "./Cards.module.css";

const Cards = ({nameUrl, name, price, addPlus}) => {
 
  const [add, setAdd] = useState(false)

  const newClick = () => {
      setAdd(!add)
      addPlus({
        name:name,
        price:price,
        nameUrl:nameUrl
      })
     
  }

  useEffect(() => {
      console.log(add)
  }, [add])

  return (
    <div className={style.card}>
        <div>
      <img width={161} height={145} src={nameUrl} alt="foto" />
      
        <p className={style.text1}>{name}</p>
        
        <div>
          <b>{price}</b>
        </div>
        <div>
          <img
          className={style.plus} 
          width={30} 
          height={25}
          onClick={newClick} 
          src={add ? "/cards/check.jpg" : "/cards/plus.jpg"}
          alt="plus" />
        </div>
        </div>
        
      </div>
      
  );
};

export default Cards;
