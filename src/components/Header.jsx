import React from "react";
import cart from "./image.png";

const Header = (props) => {
  return (
    <div>
      <h1 className="cartCount">{props.data.length}</h1>
      <div className="add-to-cart">
        <img src={cart} alt="" className="cartIcon" />
      </div>
    </div>
  );
};

export default Header;
