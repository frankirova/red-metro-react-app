import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../../services/firebase-firestore/firestore/firestore";
import { Spinner, Flex } from "@chakra-ui/react";
import { CardProdDetail } from "../Cards/CardProdDetail";

export const ProductDetailContainer = () => {
  const [prodById, setProdById] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { prodId } = useParams();

  useEffect(() => {
    getProductsById(prodId)
      .then((prod) => {
        setProdById(prod);
      })
      .finally(() => setIsLoading(false));
  }, [prodId]);

  if (isLoading)
  return (
    <Flex height='85vh' alignItems="center" justifyContent="center">
      <Spinner size='xl' color='green'/>
    </Flex>
  );
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center h-100">
      <CardProdDetail
        id={prodById.id}
        name={prodById.name}
        price={prodById.price}
        image={prodById.image}
        stock={prodById.stock}
        characteristics={prodById.characteristics}
        prodById={prodById}
      />
    </div>
  );
};
