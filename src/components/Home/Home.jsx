import { CardHome } from "./CardHome";

export const Home = () => {
  return (
    <div>
      <figure className="figure">
        <img
          className="img-home"
          src="/assets/image/taylor-vick-M5tzZtFCOfs-unsplash.jpg"
          alt="img-home"
        />
      </figure>
      <section className="cards-home">
        <CardHome />
      </section>
    </div>
  );
};
