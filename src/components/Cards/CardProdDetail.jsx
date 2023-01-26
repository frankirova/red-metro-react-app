import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  Image,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import { Counter } from "../Counter";
export const CardProdDetail = ({
  prodById,
  id,
  characteristics,
  price,
  name,
  image,
}) => {
  const { addToCart } = useContext(CartContext);

  const addTo = (quantity) => {
    addToCart({ id, image, price, name, quantity });
  };
  return (
    <div>
      <Card m={4} maxW="sm" variant="filled">
        <CardBody>
          <Image src={image} alt={name} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Text>{characteristics}</Text>
            <Text color="green.600" fontSize="2xl">
              {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider color="gray.400" my={1} />
        <CardFooter>
          {prodById.stock > 0 ? (
            <ButtonGroup spacing="2">
              <Counter prodById={prodById} addTo={addTo} />
            </ButtonGroup>
          ) : (
            <p>Sin Stock</p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
