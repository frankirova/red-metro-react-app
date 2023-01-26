import { useState } from "react";

export const Counter = ({ prodById, addTo }) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    if (count < prodById.stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <section className="botones-product-detail d-flex">
      <button
        onClick={() => {
          addTo(count);
        }}
        className="cart-widget btn btn-success mx-2 my-auto d-flex justify-content-center align-items-center w-100"
      >
        Agregar al carrito
      </button>

      <div className="count d-flex flex-row align-items-center">
        <button onClick={() => increment()} className="m-4 btn btn-success">
          +
        </button>

        <span><b>{count}</b></span>

        <button onClick={() => decrement()} className="m-4 btn btn-success">
          -
        </button>
      </div>
    </section>
  );
};
