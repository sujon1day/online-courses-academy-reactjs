import React from "react";

const Cart = (props) => {
  let totalPrice = 0;
  for (var i = 0; i < props.cart.length; i++) {
    let coursePrice = props.cart[i].price;
    totalPrice = totalPrice + coursePrice;
  }

  const tax = totalPrice / 20;
  const discount = totalPrice / 10;
  const grandTotal = totalPrice + tax - discount;

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div className="position-fixed">
      <h4>Order Summary</h4>
      <h5 className="text-success">Enroll Courses: {props.cart.length}</h5>
      <h6>
        Price: <b>${formatNumber(totalPrice)}</b>
      </h6>
      <h6>
        Tax + VAT: <b>${formatNumber(tax)}</b>
      </h6>
      <h6>
        10% OFF Discount <b>${formatNumber(discount)}</b>
      </h6>
      <h4
        style={{
          borderTop: "1px solid #000",
          paddingTop: "10px",
          marginTop: "20px",
        }}
      >
        Total Amount:{" "}
        <b className="text-success">${formatNumber(grandTotal)}</b>
      </h4>
    </div>
  );
};

export default Cart;
