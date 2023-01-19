import { useState, useEffect } from "react";
import { ProductsList } from "./ProductsList";
import { getProducts } from "../../services/firebase-firestore/firestore/firestore";
export const Products = () => {
  const [prod, setProd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //   const { categoryId } = useParams();

  useEffect(() => {
    getProducts()
      .then((prod) => {
        setProd(prod);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="conteiner d-flex flex-column justify-content-center align-items-center h-100 ">
      <ProductsList prod={prod} />
    </div>
  );
};
