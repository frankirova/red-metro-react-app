import { CardGenerica } from "../Cards/CardGen";
import { SimpleGrid } from "@chakra-ui/react";

export const ServicesList = ({ serv }) => {
  return (
    <div className="container p-3 my-2">
      <SimpleGrid
        spacing={3}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {serv.map((serv) => (
          <CardGenerica
            key={serv.id}
            title={serv.title}
            precio={serv.price}
            caract1={serv.characteristics}
            textButton='Ver mas'
          />
        ))}
      </SimpleGrid>
    </div>
  );
};
