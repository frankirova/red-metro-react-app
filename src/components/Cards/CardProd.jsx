import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  Image,
  ButtonGroup,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
export const CardProd = ({ characteristics, price, name, image }) => {
  return (
    <div>
      <Card m={4} maxW="sm" variant="filled" >
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
        <Divider color='gray.400' my={1} />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="green">
              Comprar
            </Button>
            <Button variant="ghost" colorScheme="green">
              Agregar al carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};
