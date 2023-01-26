import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  GridItem,
  Divider,
  Text,
} from "@chakra-ui/react";

export const DrawerCart = () => {
  const { getQuantity, cart, getTotal, removeItem, clearCart } =
    useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const total = getTotal();
  const totalQuantity = getQuantity();

  return (
    <>
      <Button ref={btnRef} colorScheme="green" onClick={onOpen}>
        <i className="fa-sharp fa-solid fa-cart-shopping p-1"></i>
        <span>{totalQuantity}</span>
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mi carrito</DrawerHeader>

          <DrawerBody>
            {cart.map((prod) => (
              <div key={prod.id}>
                {console.log(prod)}
                <Grid templateColumns="repeat(4, 85px)" gap={3}>
                  <GridItem w="100%" h="10">
                    {prod.name}
                  </GridItem>
                  <GridItem w="100%" h="10">
                    {prod.quantity}
                  </GridItem>
                  <GridItem w="100%" h="10">
                    {prod.price}
                  </GridItem>
                  <GridItem w="100%" h="10">
                    <Button
                      onClick={() => {
                        removeItem(prod.id);
                      }}
                    >
                      <i class="fa-solid fa-xmark"></i>
                    </Button>
                  </GridItem>
                </Grid>
                <Divider py={2} />
              </div>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Text>Total: ${total}</Text>
          </DrawerFooter>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="green">Comprar</Button>
            <Button
              onClick={() => {
                clearCart();
              }}
              colorScheme="red"
              mx="2"
            >
              <i class="fa-solid fa-trash"></i>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
