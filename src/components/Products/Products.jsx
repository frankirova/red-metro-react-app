import { useState, useEffect } from "react";
import { ProductsList } from "./ProductsList";
import { getProducts } from "../../../services/firebase-firestore/firestore/firestore";
import { Spinner, Flex } from "@chakra-ui/react";

import "../styles/Products.css";
import { H2 } from "../H2";
export const Products = () => {
  const [prod, setProd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((prod) => {
        setProd(prod);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading)
    return (
      <Flex height='85vh' alignItems="center" justifyContent="center">
        <Spinner size='xl' color='green'/>
      </Flex>
    );
  return (
    <section>
      <H2>Tienda RedMetro</H2>
      <div className="conteiner d-flex flex-column justify-content-center align-items-center h-100 ">
        <ProductsList prod={prod} />
      </div>
    </section>
  );
};
