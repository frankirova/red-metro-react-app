import { CardGenerica } from "./Card";
export const Nosotros = () => {

    const textButton = 'Contactanos !'
  return (
    <div className="d-flex gap-2 container mw-50">
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
    </div>
  );
};
