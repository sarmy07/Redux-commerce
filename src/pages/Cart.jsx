import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  remove,
} from "../features/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  //   cal total price
  const totalPrice = cart.cartItems.reduce(
    // cartItem.price * cartItem.cartQuantity
    (a, cartItem) => a + cartItem.cartQuantity * cartItem.price,
    0
  );

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleRemove = (cartItem) => {
    dispatch(remove(cartItem));
  };

  const removeAll = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container py-3">
      <h3 className="py-3">Cart Page</h3>
      {cart.cartItems.length === 0 ? (
        <div>
          <h3>Your cart is Empty</h3>
          <Link className="text-decoration-none" to="/">
            <span className="mx-1">
              <FaArrowLeft />
            </span>
            Start shopping
          </Link>
        </div>
      ) : (
        <div>
          {cart.cartItems?.map((cartItem) => {
            return (
              <div key={cartItem.id} className="cart-card">
                <div>
                  <img src={cartItem.image} style={{ width: "50px" }} alt="" />
                </div>

                <div>
                  <h5 style={{ maxWidth: "180px" }}>
                    {cartItem.title.slice(0, 20)}
                  </h5>
                  <h6>${cartItem.price}</h6>
                </div>

                <div className="cartBtns">
                  <button
                    className="cartBtn"
                    onClick={() => handleIncreaseCart(cartItem)}
                  >
                    +
                  </button>
                  <h6>{cartItem.cartQuantity}</h6>
                  <button
                    className="cartBtn"
                    onClick={() => handleDecreaseCart(cartItem)}
                  >
                    -
                  </button>
                </div>

                <div>
                  <h6>
                    ${(cartItem.price * cartItem.cartQuantity).toFixed(2)}
                  </h6>
                  <button
                    className="btn-danger"
                    onClick={() => handleRemove(cartItem)}
                  >
                    remove
                  </button>
                </div>
              </div>
            );
          })}

          <hr />

          <div className="d-flex justify-content-between mb-5">
            <button className="clear-btn" onClick={removeAll}>
              Clear All
            </button>
            <h5>
              Total Price: <b>${totalPrice.toFixed(2)}</b>
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
