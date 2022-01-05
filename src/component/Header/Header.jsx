import React from "react";
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.headLeft}>
      <div>
       
        <div>
          <h3>React Guitar</h3>
          <p>Musical instrument store</p>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
