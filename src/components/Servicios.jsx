import { useState, useEffect } from "react";
import { getServices } from "../../services/firebase-firestore/firestore/firestore";
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
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <ServicesList serv={services} />
    </div>
  );
};
