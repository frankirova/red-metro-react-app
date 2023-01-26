import React from "react";
// import Modal from "../Modal/Modal";
import { useContext, useState, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { DrawerCart } from "./Drawer";
// import { Drawer } from "./Drawer";
// import "./CartWidget.css";
// import { Link } from "react-router-dom";
// import { authContext } from "../../Context/LoginContext";

export const CartWidget = () => {
  const [modalShow, setModalShow] = useState(false);
  //   const { isLoggedIn } = useContext(authContext);

  
  return (
    <div>
      <button
        // onClick={() => setModalShow(true)}
        className=" cart-widget btn btn-success mx-2 my-auto d-flex justify-content-center align-items-center"
      >
        <DrawerCart />
        
        {/* <i className="fa-sharp fa-solid fa-cart-shopping p-1"></i>
        <span>{totalQuantity}</span> */}
      </button>
      {/* <Modal show={modalShow} onHide={() => setModalShow(false)} /> */}
    </div>
  );
};
