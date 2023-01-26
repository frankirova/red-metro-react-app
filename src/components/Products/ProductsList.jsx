import { CardProd } from "../Cards/CardProd";

export const ProductsList = ({ prod }) => {

  return (
    <div className="row align-items-center justify-content-center">
      {prod.map((prod) => (
        <div className="col-md-4" key={prod.id}>
          <CardProd
            name={prod.name}
            image={prod.image}
            price={prod.price}
            characteristics={prod.characteristics}
            toBtnVerMas= {`/productos/${prod.id}`}
          />
        </div>
      ))}
    </div>
  );
};
