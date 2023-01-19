import { SimpleGrid } from "@chakra-ui/react";
import { CardGenerica } from "./Cards/CardGen";
export const CardHome = () => {
  const textButton = "Ver mas";
  return (
    <div className="container p-3 my-2">
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
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
      </SimpleGrid>
    </div>
  );
};
