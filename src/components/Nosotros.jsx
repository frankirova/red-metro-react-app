import { SimpleGrid } from "@chakra-ui/react";
import { CardGenerica } from "./Cards/CardGen";
import { H2 } from "../components/H2";
export const Nosotros = () => {
  const textButton = "Contactanos !";
  return (
    <div>
      <H2>Nosotros</H2>
      <div className="d-flex flex-column gap-2 container mw-50 align-items-center justify-content-center">
        <SimpleGrid
          spacing={3}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          a
        >
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
        </SimpleGrid>
      </div>
    </div>
  );
};
