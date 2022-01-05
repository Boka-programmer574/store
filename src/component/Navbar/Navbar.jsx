import React  from "react";

import style from "./Navbar.module.css";

const Navbar = ({basketClick}) => {

 
 
  return (
    <div className={style.nav}>
      
      <ul>
        <img
          className={style.basket}
          width={70}
          height={40}
          src="/cards/basket.jpg"
          alt="basket"
          
          onClick={basketClick}
        />
        
      </ul>
    </div>
  );
};

export default Navbar;
