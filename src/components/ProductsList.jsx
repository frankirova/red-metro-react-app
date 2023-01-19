import { CardProd } from "./Cards/CardProd";

export const ProductsList = ({ prod }) => {
  // const CharacteristicsList = prod.characteristics.map(c => <li>{c}</li>)
  return (
    <div className="row align-items-center justify-content-center">
      {prod.map((prod) => (
        <div className="col-md-4" key={prod.id}>
          <CardProd
            name={prod.name}
            characteristics={prod.characteristics}
            to=""
            price={prod.price}
            image={prod.image}
          />
        </div>
      ))}
    </div>
  );
  //   console.log(prod.characteristics)
};
