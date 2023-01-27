import { Container, Flex, Grid, GridItem, Box } from "@chakra-ui/react";
import { CardGenerica } from "./Cards/CardGen";
import { H2 } from "../components/H2";
import { Mapa } from "./Mapa";
export const Nosotros = () => {
  const textButton = "Contactanos !";
  return (
    <div className="container">
      <H2>Nosotros</H2>
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap="4"
        templateAreas={`"image cards"
                  "mapa cards"`}
      >
        <GridItem
          w="600px"
          bgImage="url('/assets/image/torre-angela5.webp')"
          bgRepeat="no-repeat"
          bgSize="cover"
          area={"image"}
        >
          <Box></Box>
        </GridItem>
        <GridItem area={"mapa"}>
          <Flex alignItems="center">
            <Mapa />
          </Flex>
        </GridItem>
        <GridItem area={"cards"}>
          <Flex spacing="1" direction="column">
            <CardGenerica
              caract1="Nos caracterizamos por brindar soluciones integrales de
        telecomunicaciones a grandes empresas desde hace más de una década."
              textButton={textButton}
            />
            <CardGenerica
              caract1="Por cobertura, servicio y experiencia, es una opción diferenciadora en
        el mercado de acceso a Internet y transmisión de datos"
              textButton={textButton}
            />
            <CardGenerica
              caract1="Contamos con un importante staff de técnicos que trabajan en equipo hacia objetivos afines. Valoramos nuestro
        capital humano, entendiéndolo como el eslabón fundamental."
              textButton={textButton}
            />
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
};
