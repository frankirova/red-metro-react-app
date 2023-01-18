import {
  //   Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { CardGenerica } from "./Card";
export const CardServicios = () => {
  const textButton = "Ver mas";
  return (
    <div className="container p-3 my-2">
      <SimpleGrid
        spacing={350}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <CardGenerica
          title="Hasta 6MB"
          caract1="Cargo de instalacion $10.000"
          caract2="No requiere servicios adicionales"
          caract3="Consutlar disponibilidad"
          caract4="Tecnologia: AIR MAX"
          textButton={textButton}
        />
        <CardGenerica
          title="Hasta 10MB"
          caract1="Cargo de instalacion $15.000"
          caract2="No requiere servicios adicionales"
          caract3="Consutlar disponibilidad"
          caract4="Tecnologia: AC"
          textButton={textButton}
        />
      </SimpleGrid>
      <SimpleGrid
        spacing={350}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <CardGenerica
          title="Hasta 100MB"
          caract1="Cargo de instalacion $20.000"
          caract2="No requiere servicios adicionales"
          caract3="Consutlar disponibilidad"
          caract4="Tecnologia: LTU"
          textButton={textButton}
        />
        <CardGenerica
          title="Hasta 200MB"
          caract1="Cargo de instalacion $25.000"
          caract2="No requiere servicios adicionales"
          caract3="Consutlar disponibilidad"
          caract4="Tecnologia: LTU"
          textButton={textButton}
        />
      </SimpleGrid>
    </div>
  );
};
