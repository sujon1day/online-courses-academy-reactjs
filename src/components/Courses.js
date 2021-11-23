import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Course from "./Course";
import Data from "../fakeData/fakeData.json";

const Courses = () => {
  const [data, setData] = useState(Data);
  const [cart, setCart] = useState([]);

  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };

  const mt = {
    marginTop: "5rem",
  };

  return (
    <div
      style={mt}
      className="courses container d-flex justify-content-between"
    >
      <div
        style={{
          flexBasis: "70%",
        }}
        className="courses-container"
      >
        {data.map((item) => (
          <Course handleAddCourse={handleAddCourse} course={item}></Course>
        ))}
      </div>
      <div
        style={{
          flexBasis: "25%",
        }}
        className="cart-container"
      >
        <h1>
          <Cart cart={cart}></Cart>
        </h1>
      </div>
    </div>
  );
};

export default Courses;
