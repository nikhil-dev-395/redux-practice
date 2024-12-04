import React from "react";
import "./Home.css";
import cart from "./image.png";
const Home = (props) => {
  //   const cartIcon = "../assets/icons/cartIcon.svg";
  console.log("home", props);

  return (
    <div>
      {/* <h1 className="cartCount">{props.data.length}</h1>
      <div className="add-to-cart">
        <img src={cart} alt="" className="cartIcon" />
      </div> */}
      <div>
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img
              src="https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="mobile image"
            />
          </div>
          <div className="text-wrapper item ">I - phone , price : $ 1000</div>
          <div className="btn-wrapper item">
            <button
              onClick={() => {
                props.addToCartHandler({ price: "1000", name: "iphone-16" });
              }}
            >
              add to cart
            </button>

            <button
              onClick={() => {
                props.removeToCartHandler();
              }}
            >
              remove cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
