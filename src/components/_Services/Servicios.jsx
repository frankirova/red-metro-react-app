import { Select, Spinner, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getServices } from "../../../services/firebase-firestore/firestore/firestore";
import { H2 } from "../H2";
import { ServicesList } from "./ServicesList";

export const Servicios = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getServices()
      .then((services) => {
        setServices(services);
      })
      .finally(() => setIsLoading(false));
  }, []);
  if (isLoading)
    return (
      <Flex height="85vh" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="green" />
      </Flex>
    );
  return (
    <div>
      <H2>Servicios</H2>
      <Select />
      <ServicesList serv={services} />
    </div>
  );
};
