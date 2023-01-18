import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { CardGenerica } from "./Card";
export const CardHome = () => {
  const textButton = "Ver mas";
  return (
    <div className="container p-3 my-2">
      <SimpleGrid
        spacing={140}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <CardGenerica
          title="Internet"
          caract1="Servicios dedicado"
          caract2="Banda ancha simetrica"
          caract3="Residenciales"
          textButton={textButton}
        />
        <CardGenerica
          title="Datacenter"
          caract1="0800-0810"
          caract2="Central Virtual"
          caract3="Servicios personalizados"
          textButton={textButton}
        />
        <CardGenerica
          title="Telefonia IP"
          caract1="Servidor dedicado"
          caract2="Hosting"
          caract3="Servicios VPN"
          textButton={textButton}
        />
        <CardGenerica
          title="Tienda RedMetro"
          caract1="Routers"
          caract2="Mikrotiks"
          caract3="Enlaces PTP (empresas)"
          textButton={textButton}
        />
        {/* <Card>
          <CardHeader className="text-success">
            <Heading size="md">Telefonia IP</Heading>
          </CardHeader>
          <CardBody>
            <Text>Servidor dedicado</Text>
            <Text>Hosting</Text>
            <Text>Servicios VPN</Text>
          </CardBody>
          <CardFooter>
            <Button className="text-success">Ver mas</Button>
          </CardFooter>
        </Card> */}
      </SimpleGrid>
    </div>
  );
};
